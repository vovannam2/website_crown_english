---
name: design-system-kh-a-pre-ielts-hi-u-b-n-ch-t-c-a-ti-ng-anh-v-c-c
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Khóa Pre IELTS: Hiểu Bản Chất Của Tiếng Anh Và Cách Học Đúng

## Mission
Deliver implementation-ready design-system guidance for Khóa Pre IELTS: Hiểu Bản Chất Của Tiếng Anh Và Cách Học Đúng that can be applied consistently across documentation site interfaces.

## Brand
- Product/brand: Khóa Pre IELTS: Hiểu Bản Chất Của Tiếng Anh Và Cách Học Đúng
- URL: https://www.dolenglish.vn/khoa-hoc-ielts/pre
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Google Sans Flex Variable`, `font.family.stack=Google Sans Flex Variable, sans-serif`, `font.size.base=14px`, `font.weight.base=500`, `font.lineHeight.base=20px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=13.33px`, `font.size.md=14px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`, `font.size.3xl=24px`, `font.size.4xl=40px`
- Color palette: `color.text.primary=#232323`, `color.text.secondary=#ffffff`, `color.text.tertiary=#313a44`, `color.text.inverse=#5a6877`, `color.surface.base=#000000`, `color.surface.raised=#f9fafa`, `color.surface.strong=#d42525`
- Spacing scale: `space.1=1px`, `space.2=2.5px`, `space.3=6px`, `space.4=7px`, `space.5=8px`, `space.6=12px`, `space.7=14px`, `space.8=15px`
- Radius/shadow/motion tokens: `radius.xs=3px`, `radius.sm=8px`, `radius.md=12px`, `radius.lg=16px`, `radius.xl=24px`, `radius.2xl=26px`, `radius.step7=32px`, `radius.step8=50px` | `shadow.1=rgba(0, 43, 43, 0.02) 0px 24px 0px -16px`, `shadow.2=rgba(0, 0, 0, 0.06) 0px 8px 24px 0px`, `shadow.3=rgba(0, 18, 55, 0.05) 0px 40px 40px -32px` | `motion.duration.instant=150ms`, `motion.duration.fast=180ms`, `motion.duration.normal=200ms`, `motion.duration.slow=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
