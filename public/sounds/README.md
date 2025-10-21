# Halloween Sound Files

This directory should contain the following royalty-free sound files for the Halloween theme:

## Required Files

### 1. ambient-halloween.mp3
- **Purpose**: Background ambient Halloween atmosphere (loops continuously)
- **Duration**: 30-60 seconds (will loop)
- **Suggested Sources**:
  - Freesound.org: Search for "halloween ambient" or "spooky atmosphere"
  - Pixabay: https://pixabay.com/sound-effects/search/halloween%20ambient/
  - YouTube Audio Library: Search for "Halloween Ambience"
- **Characteristics**:
  - Low volume background music
  - Subtle creepy atmosphere
  - Should loop seamlessly

### 2. wolf-howl.mp3
- **Purpose**: Occasional wolf howl (plays every 30-45 seconds randomly)
- **Duration**: 2-5 seconds
- **Suggested Sources**:
  - Freesound.org: Search for "wolf howl" or "werewolf"
  - Pixabay: https://pixabay.com/sound-effects/search/wolf%20howl/
  - Zapsplat: https://www.zapsplat.com (free with attribution)
- **Characteristics**:
  - Clear, distinct howl
  - Not too loud or jarring
  - Single howl, not extended

### 3. bone-clack.mp3
- **Purpose**: Sound effect when hovering over clickable elements (skeleton hand appears)
- **Duration**: < 1 second
- **Suggested Sources**:
  - Freesound.org: Search for "bone click" or "skeleton"
  - Pixabay: https://pixabay.com/sound-effects/search/bones/
- **Characteristics**:
  - Short, sharp bone/click sound
  - Low volume (set to 30% in code)
  - Quick and subtle

## Licensing Notes

All sound files should be:
- Royalty-free for commercial use
- No attribution required (or attribution provided in credits)
- Compatible with web distribution

## Fallback Behavior

The Halloween sound system is designed to gracefully handle missing sound files:
- If audio files are not present, the mute button will still render
- Audio playback will fail silently (no errors shown to users)
- All interactive elements will work without sound
- Users can still toggle the mute button (it just won't play anything)

## Volume Levels (as configured)

- `ambient-halloween.mp3`: 15% volume
- `wolf-howl.mp3`: 25% volume
- `bone-clack.mp3`: 30% volume

These volumes are optimized for a non-intrusive Halloween atmosphere.
