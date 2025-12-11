build:
    @go run .

serve:
    @watchexec --clear --restart --ignore dist 'just build && serve dist'
