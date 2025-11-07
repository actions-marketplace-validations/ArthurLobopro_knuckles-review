# knuckles-review

## Why use Knuckles Review

Why not???

## How to use

Add a step on your github action like this

```yml
- name: Knuckles Review
    if: ${{ github.event.review.state == 'approved' }}
    uses: ArthurLobopro/knuckles-review@v0.1
    with:
        type: "Approved"

```