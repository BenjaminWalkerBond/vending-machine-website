// src/styles/global.css.ts
import { globalStyle } from '@vanilla-extract/css'
import { vars } from './tokens.css.ts'

globalStyle('body', {
  background: `linear-gradient(180deg, ${vars.color.bg} 0%, ${vars.color.surface} 60%)`,
  color: vars.color.ink,
})

globalStyle('.card', {
  background: vars.color.surface,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.soft,
  border: `1px solid ${vars.color.line}`,
})
