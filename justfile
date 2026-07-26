default: dev

dev:
    hugo server -w

build:
    hugo --minify

clean:
    rm -rf public resources .hugo_build.lock
