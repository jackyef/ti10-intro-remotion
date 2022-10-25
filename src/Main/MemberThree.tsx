import {
	Img,
	interpolate,
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

	const colorStep = interpolate(frame, [0, 40], [0, 1]);
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

	const pictureScale = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 400,
			stiffness: 400,
		},
		from: 2,
		to: 1,
	});

	const backgroundColor = (() => {
		if (colorStep < 0.1 || colorStep > 0.3) return TI_BLUE;
		return 'white';
	})();
	const textColor = backgroundColor === 'white' ? TI_BLUE : 'white';

	return (
		<div
			style={{
				height: '100%',
				background: backgroundColor,
			}}
		>
			<div
				style={{
					color: textColor,
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
					transform: `scale(${pictureScale} )`,
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

	// We want to split the nickname into n different frames
	// Each frame only showing 2 characters at most
	const nicknameLength = nickname.length;
	const shownLength = 2;
	const lastSequence = Math.ceil(nicknameLength / shownLength)
	const nicknameSequence = Math.round(
		interpolate(frame, [0, 38], [1, lastSequence])
	);
	const shownNickname = (() => {
		return nickname.slice(
			(nicknameSequence - 1) * shownLength,
			shownLength * nicknameSequence
		);
	})();

	return (
		<div
			style={{
				height: '100%',
				background: `linear-gradient(165deg, rgba(0,0,0,1) 0%, rgba(57,57,57,1) 36%, rgba(62,62,62,1) 72%, rgba(0,0,0,1) 100%)`,
			}}
		>
			<Img
				style={{
					position: 'absolute',
					bottom: 0,
					left: 400,
					filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
					transform: `scale(${pictureScale})`,
				}}
				src={picture}
				height={1080}
				width={1080}
			/>

			<div
				style={{
					color: TI_BLUE,
					fontFamily: 'Arial',
					textShadow: '50px 50px 50px 400px',
					fontWeight: 800,
					textTransform: 'uppercase',
					fontSize: '300px',
					opacity: nameFade,
					transform: `translateX(${nameTranslate * 200}px)`,
				}}
			>
				<p
					style={{
						position: 'absolute',
						top: 100,
						left: 0,
						right: 0,
						textAlign: 'center',
					}}
				>
					{shownNickname}
				</p>
			</div>
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

	const pictureTranslate = spring({
		fps: videoConfig.fps,
		frame,
		durationInFrames: 100,
		config: {
			damping: 2000,
			stiffness: 400,
		},
		from: 0.5,
		to: 0,
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
					fontSize: '150px',
					opacity: nameFade,
					transform: `translateX(${nameTranslate * 700}px)`,
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
					transform: `translateX(${pictureTranslate * -800}px)`,
				}}
				src={picture}
				height={1080}
				width={1080}
			/>
		</div>
	);
};
