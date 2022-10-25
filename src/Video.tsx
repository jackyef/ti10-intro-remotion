import {Composition} from 'remotion';
import {Main} from './Main';

const VIDEO_DURATION = 21; // Seconds
const FPS = 60;
const VIDEO_DURATION_IN_FRAMES = VIDEO_DURATION * FPS;

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="main"
				component={Main}
				durationInFrames={VIDEO_DURATION_IN_FRAMES}
				fps={FPS}
				width={1920}
				height={1080}
			/>
		</>
	);
};
