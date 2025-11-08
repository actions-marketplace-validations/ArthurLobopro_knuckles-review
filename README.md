# knuckles-review

## Why use Knuckles Review

Why not???

## How to use

* Create a Workflow with this trigger:

```yml
on:
  pull_request_review:
    types: [submitted]
```

* In this workflow, create a job with this permissions

```yml
permissions: 
  pull-requests: write
```

* Provide GITHUB_TOKEN on job env

```yml
env:
  GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

* Add a step on your github action like this

```yml
- name: Knuckles Review
    if: ${{ github.event.review.state == 'approved' }}
    uses: ArthurLobopro/knuckles-review@v1.0
    with:
        type: "Approved"

```

View the complete sample.yml on .github/workflows/sample.yml in this repository.