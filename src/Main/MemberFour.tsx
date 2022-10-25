import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TI_BLUE} from '../constants/colors';

const [firstName, lastName] = 'Member Four'.split(' ');
const nickname = 'Four';
const nicknameReversed = nickname.split('').reverse().join('')

export const One = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const picture = staticFile('members/1/1.png');

	const nameTranslate = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 2000,
			stiffness: 400,
		},
		from: 0.5,
		to: 0,
	});

	const pictureTranslate = spring({
		fps: videoConfig.fps,
		frame,
		durationInFrames: 20,
		config: {
			damping: 10000,
			stiffness: 400,
		},
		from: 1,
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
					position: 'absolute',
					inset: 0,
					color: 'white',
					fontFamily: 'Arial',
					textShadow: '50px 50px 50px 400px',
					fontWeight: 800,
					textTransform: 'uppercase',
					fontSize: '200px',
					whiteSpace: 'nowrap',
					transform: `translateX(${nameTranslate * -800}px)`,
					zIndex: 3,
				}}
			>
				<p
					style={{
						position: 'absolute',
						top: -200,
						left: 400,
					}}
				>
					{`${nicknameReversed} `.repeat(3)}
				</p>
				<p
					style={{
						position: 'absolute',
						bottom: -200,
						left: 300,
					}}
				>
					{`${nicknameReversed} `.repeat(3)}
				</p>
			</div>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					color: 'white',
					fontFamily: 'Arial',
					textShadow: '50px 50px 50px 400px',
					fontWeight: 800,
					textTransform: 'uppercase',
					fontSize: '200px',
					whiteSpace: 'nowrap',
					transform: `translateX(${nameTranslate * 800}px)`,
					zIndex: 1,
				}}
			>
				<p
					style={{
						position: 'absolute',
						top: 0,
						right: 400,
					}}
				>
					{`${nickname} `.repeat(3)}
				</p>
				<p
					style={{
						position: 'absolute',
						bottom: 0,
						right: 300,
					}}
				>
					{`${nickname} `.repeat(3)}
				</p>
			</div>

			<div
				style={{
					color: 'white',
					fontFamily: 'Arial',
					textShadow: '50px 50px 50px 400px',
					fontWeight: 800,
					textTransform: 'uppercase',
					fontSize: '200px',
					whiteSpace: 'nowrap',
					transform: `translateX(${nameTranslate * -800}px)`,
					zIndex: 1,
				}}
			>
				<p
					style={{
						position: 'absolute',
						top: 200,
						left: 100,
					}}
				>
					{`${nicknameReversed} `.repeat(3)}
				</p>
			</div>

			<Img
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					filter: 'grayscale(100%) drop-shadow(100px 100px 400px black)',
					transform: `translateX(${pictureTranslate * -400}px)`,
					zIndex: 2,
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

	const nameScale = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 400,
		},
		from: 0.8,
		to: 1,
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
				background: 'white',
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
					transform: `translateX(${nameTranslate * 200}px) scale(${nameScale})`,
				}}
			>
				<p
					style={{
						position: 'absolute',
						top: -50,
						left: 400,
						whiteSpace: 'nowrap',
					}}
				>
					{`${nickname} `.repeat(2)}
				</p>
				<p
					style={{
						position: 'absolute',
						top: 175,
						left: 100,
						whiteSpace: 'nowrap'
					}}
				>
					{`${nickname} `.repeat(5)}
				</p>
				<p
					style={{
						position: 'absolute',
						top: 400,
						left: 200,
						whiteSpace: 'nowrap'
					}}
				>
					{`${nickname} `.repeat(5)}
				</p>
			</div>

			<Img
				style={{
					position: 'absolute',
					bottom: 0,
					right: 400,
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
		durationInFrames: 100,
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
			damping: 1000,
			stiffness: 400,
		},
		from: 2,
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
					transform: `translateX(${nameTranslate * 900}px)`,
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
					transform: `translateX(${pictureTranslate * 400}px)`,
				}}
				src={picture}
				height={1080}
				width={1080}
			/>
		</div>
	);
};
