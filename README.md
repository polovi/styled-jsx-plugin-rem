# styled-jsx-plugin-rem

Convert `px` to `rem` with [styled-jsx](https://github.com/zeit/styled-jsx) function 💥

## Install

```bash
npm install --save-dev git://github.com/polovi/styled-jsx-plugin-rem
```

## Usage

Add `styled-jsx-plugin-rem` to the `styled-jsx`'s `plugins` in your babel configuration:

```json
{
  "plugins": [
    [
      "styled-jsx/babel",
      {
        "plugins": ["styled-jsx-plugin-rem"]
      }
    ]
  ]
}
```

### Options

#### `base`

Base line value for conversion (default: `16`)

#### `precision`

Convert round precision (default: `5`)

## Notes

`styled-jsx-plugin-rem` uses `styled-jsx`'s plugin system which is supported from version 2.

Read more on their repository for further info.

## License

MIT
