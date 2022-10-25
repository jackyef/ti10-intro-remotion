import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TI_BLUE} from '../constants/colors';


const [firstName, lastName] = 'Member Three'.split(' ');
const nickname = 'Three';

export const One = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const picture = staticFile('members/1/1.png');

	const nameTranslate = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 200,
			stiffness: 400,
		},
		from: 0.5,
		to: 0,
	});

	const pictureTranslate = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 200,
			stiffness: 400,
		},
		from: 0.3,
		to: 0,
	});

	return (
		<div
			style={{
				height: '100%',
				background: TI_BLUE,
			}}
		>
			<div
				style={{
					color: 'white',
					fontFamily: 'Arial',
					textShadow: '50px 50px 50px 400px',
					fontWeight: 800,
					textTransform: 'uppercase',
					fontSize: '400px',
					whiteSpace: 'nowrap',
					transform: `translateX(${nameTranslate * -400}px)`,
				}}
			>
				<p
					style={{
						position: 'absolute',
						top: -400,
						left: 100,
					}}
				>
					{`${firstName} `.repeat(3)}
				</p>
				<p
					style={{
						position: 'absolute',
						top: 100,
						left: 100,
					}}
				>
					{`${lastName} `.repeat(3)}
				</p>
			</div>

			<Img
				style={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
					transform: `translateX(${pictureTranslate * 300}px)`,
				}}
				src={picture}
				height={1080}
				width={1080}
			/>
		</div>
	);
};

export const Two = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const picture = staticFile('members/1/2.png');

	const nameFade = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 400,
		},
		from: 0.3,
		to: 1,
	});

	const nameTranslate = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 400,
		},
		from: 0.3,
		to: 0,
	});

	const pictureScale = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 200,
			stiffness: 400,
		},
		from: 3,
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
					fontSize: '200px',
					opacity: nameFade,
					transform: `translateX(${nameTranslate * 200}px)`,
				}}
			>
				<p
					style={{
						position: 'absolute',
						top: -400,
						left: 100,
					}}
				>
					{`${nickname} `.repeat(99)}
				</p>
			</div>

			<Img
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
					transform: `scale(${pictureScale})`,
				}}
				src={picture}
				height={1080}
				width={1080}
			/>
		</div>
	);
};

export const Three = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const picture = staticFile('members/1/1.png');

	const nameFade = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 400,
		},
		from: 0.3,
		to: 1,
	});

	const nameTranslate = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 400,
		},
		from: 0.3,
		to: 0,
	});

	const pictureScale = spring({
		fps: videoConfig.fps,
		frame,
    durationInFrames: 100,
		config: {
			damping: 2000,
			stiffness: 400,
		},
		from: 3,
		to: 1,
	});

  const textScale = spring({
    fps: videoConfig.fps,
		frame,
    durationInFrames: 100,
		config: {
			damping: 2000,
			stiffness: 100,
		},
		from: 1.5,
		to: 1,
  })

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
						fontSize: '150px',
						opacity: nameFade,
            transform: `scale(${textScale}) translateX(${nameTranslate * 200}px)`,
					}}
				>
					<p
						style={{
							position: 'absolute',
							top: 200,
							left: 200,
						}}
					>
						{nickname}
					</p>
					<p
						style={{
							position: 'absolute',
							top: 470,
							fontSize: '70px',
							left: 200,
						}}
					>
						{firstName} {lastName}
					</p>
				</div>

				<Img
					style={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
            transform: `scale(${pictureScale})`,
					}}
					src={picture}
					height={1080}
					width={1080}
				/>
			</div>
	);
};
