import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TI_BLUE} from '../constants/colors';

const teamName = 'eSports team';

export const GroupShot = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const picture1 = staticFile('members/1/1.png');
	const picture2 = staticFile('members/1/2.png');
	const picture3 = staticFile('members/1/1.png');
	const picture4 = staticFile('members/1/2.png');
	const picture5 = staticFile('members/1/1.png');

	const nameScale = spring({
		fps: videoConfig.fps,
		frame,
    durationInFrames: 400,
		config: {
			damping: 10000,
			stiffness: 400,
		},
		from: 1.8,
		to: 1,
	});

	const pictureScale = spring({
		fps: videoConfig.fps,
		frame,
    durationInFrames: 400,
		config: {
			damping: 20000,
			stiffness: 400,
		},
		from: 1.6,
		to: 1,
	});

	return (
		<div
			style={{
				height: '100%',
				background: `linear-gradient(165deg, rgba(0,0,0,1) 0%, rgba(57,57,57,1) 36%, rgba(62,62,62,1) 72%, rgba(0,0,0,1) 100%)`,
			}}
		>
			<div
				style={{
					color: TI_BLUE,
					fontFamily: 'Arial',
					textShadow: '50px 50px 50px 400px',
					fontWeight: 800,
					textTransform: 'uppercase',
					fontSize: '80px',
					whiteSpace: 'nowrap',
					transform: `scale(${nameScale})`,
					position: 'absolute',
					bottom: 50,
					left: 0,
					right: 0,
					textAlign: 'center',
          zIndex: 1,
				}}
			>
				<p style={{
          textShadow: '50px 50px 200px 400px',
        }}>{teamName}</p>
			</div>

			<div
				style={{
					transform: `scale(${pictureScale})`,
					isolation: 'isolate',
					position: 'absolute',
					inset: 0,
				}}
			>
				<Img
					style={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
						zIndex: 1,
					}}
					src={picture1}
					height={1080}
					width={1080}
				/>
				<Img
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
						zIndex: 3,
					}}
					src={picture2}
					height={1080}
					width={1080}
				/>
				<Img
					style={{
						position: 'absolute',
						bottom: 0,
						left: 200,
						filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
						zIndex: 2,
					}}
					src={picture3}
					height={1080}
					width={1080}
				/>
				<Img
					style={{
						position: 'absolute',
						bottom: 0,
						right: 200,
						filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
						zIndex: 4,
					}}
					src={picture4}
					height={1080}
					width={1080}
				/>
				<Img
					style={{
						position: 'absolute',
						bottom: 0,
						right: 400,
						filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
						zIndex: 5,
					}}
					src={picture5}
					height={1080}
					width={1080}
				/>
			</div>
		</div>
	);
};
