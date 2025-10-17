# Hero Video Setup

## Video Location
Place your background video file at: `public/videos/hero-background.mp4`

## Video Requirements

### Technical Specifications
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 (Full HD) minimum
- **Aspect Ratio**: 16:9
- **Duration**: 10-30 seconds (will loop)
- **File Size**: Optimize to < 5MB for faster loading

### Content Suggestions
Consider videos showing:
- Students learning in classrooms
- Teachers using technology
- School campus overview
- Modern educational technology in use
- Dynamic school environments

## Optimization Tips

1. **Compress the video** using tools like:
   - HandBrake (free)
   - Adobe Media Encoder
   - Online tools like cloudconvert.com

2. **Use proper encoding settings**:
   ```
   Codec: H.264
   Bitrate: 2-3 Mbps
   Frame Rate: 24-30 fps
   Audio: Remove (not needed for background video)
   ```

3. **Fallback Options**:
   - If video doesn't load, the gradient overlay will show
   - Consider adding a poster image attribute

## Creating the Videos Folder

```powershell
# From the landing_page directory
mkdir public\videos
```

Then place your video file as: `hero-background.mp4`

## Alternative: Using a Placeholder

If you don't have a video yet, you can:
1. Use stock video from sites like Pexels, Pixabay, or Coverr
2. Use an animated gradient (CSS fallback already included)
3. Temporarily use an image as poster until video is ready

## Example with Poster Image

Update the video tag in `Hero.jsx` to:
```jsx
<video 
  className="hero-video" 
  autoPlay 
  loop 
  muted 
  playsInline
  poster="/images/hero-poster.jpg"
>
```
