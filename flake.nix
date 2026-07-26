{
  description = "Laon - Reproducible Platform Engineer website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        packages.default = pkgs.stdenvNoCC.mkDerivation {
          pname = "laontme-homepage";
          version = "1.0.0";
          src = self;

          nativeBuildInputs = with pkgs; [
            hugo
            tailwindcss_4
          ];

          buildPhase = ''
            export HOME="$TMPDIR"
            hugo --minify --destination "$out"
          '';
        };

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            go_1_25
            hugo
            just
            tailwindcss_4
          ];
        };
      }
    );
}
