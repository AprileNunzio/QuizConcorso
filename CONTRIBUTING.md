# Contributing to QuizConcorso

Thank you for your interest in contributing to QuizConcorso!

## Development Guidelines

1. **Architecture**: Follow Clean Architecture and Separation of Concerns (SoC).
2. **Pure Code**: Do not commit inline comments unless explicitly requested. Write clean, self-documenting TypeScript.
3. **File Length Limit**: Keep every source code file strictly under 500 lines. Modularize if a file approaches this threshold.
4. **Typing**: Strict TypeScript without `any` casts where avoidable.
5. **No AI Artifacts or Secrets**: Never commit API keys, `.env` credentials, or AI tool configuration folders.

## Workflow

1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/my-feature
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Verify local build:
   ```bash
   npm run build
   ```
4. Open a Pull Request following the PR template.
