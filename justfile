default: dev

dev:
    hugo server -w --disableFastRender

build:
    hugo --minify --cleanDestinationDir

clean:
    rm -rf public resources .hugo_build.lock
