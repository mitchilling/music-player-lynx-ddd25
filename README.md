## About the Project

This project is a demo of using **Lynx**, a cross-platform development framework designed to provide a "write once, render anywhere" solution for building user interfaces across multiple platforms.

- 🌐 [Website](https://lynxjs.org/)
- 🧰 [GitHub](https://github.com/lynx-family/lynx)

## About the App

This app simulates the core interactions of a modern music player. You can swipe vertically to seamlessly switch between songs — similar to the "For You" feed experience — and interact with features like liking or sharing a song.

<img src="docs/screenshot.png" alt="Screenshot of the Lynx music player demo" height="400"/>

## What You’ll Learn

This demo showcases key features of the Lynx framework and React integration:

- How to scaffold a project using `rspeedy`
- Building UI with **React functional components** (without any extra framework)
- Using core Lynx UI elements: `<view>`, `<list>`, `<text>`, `<image>`
- Managing state with `jotai` atoms
- Implementing `<text>` inline truncation
- Applying CSS animations
- Using CSS variables effectively

## Getting Started

1. **Install dependencies**

```bash
pnpm install
```

2. **Start the development server**

```bash
pnpm run dev
```

3. **Preview on device**

Scan the QR code shown in your terminal using the LynxExplorer App.

- Get the app from the [Lynx Website](https://lynxjs.org/guide/start/quick-start.html).
- Or install from the [App Store](https://apps.apple.com/us/app/lynx-go-dev-explorer/id6743227790) or [Google Play](https://play.google.com/store/apps/details?id=com.funcs.io.lynx.go)

### 🧪 Step-by-Step Tags

Each development step is organized into a Git tag:

```bash
# Example: check out step #3
git checkout step-3
```

**Available Steps:**

- `step-1`: Create a project from scratch
- `step-2`: Prepare assets: songs, pictures, icons
- `step-3`: Import `jotai` for shared state management
- `step-4`: Build a vertical swipable song list
- `step-5`: Add `VinylRecord`, `ProgressBar`, and `ActionBar` components
- `step-6`: Add a `Song` model with relevant metadata
- `step-7`: Add a `MockPlayer` with basic playback methods
- `step-8`: Add `PlaybackManager` and implement `switchTo`, `togglePauseResume`, `toggleLike` as well as a mock playback timer
- `step-9`: Implement the tap event of Like in the Action Bar. Initialize the manager and some global state.
- `step-10`: Implement the tap event of Play in the Action Bar
- `step-11`: Enable vertical swiping and update song titles, and add an InfoBox component to display them
- `step-12`: Polish the UI layout
- `step-13`: Enlarge tap areas for better UX
- `step-14`: Fix the Like status
- `step-15`: Make the progress bar interactive
- `step-16`: Add spinning vinyl animation
- `step-17`: Put song cover above the vinyl
- `step-18`: Apply text inline truncation to song title
