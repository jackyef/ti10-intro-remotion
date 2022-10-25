import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import * as MemberOne from './MemberOne';
import * as MemberTwo from './MemberTwo';
import * as MemberThree from './MemberThree';
import * as MemberFour from './MemberFour';
import * as MemberFive from './MemberFive';
import {GroupShot} from './GroupShot';

export const Main = () => {
	return (
		<AbsoluteFill>
			<Sequence from={0} durationInFrames={32}>
				<AbsoluteFill>
					<MemberOne.One />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={32} durationInFrames={38}>
				<AbsoluteFill>
					<MemberOne.Two />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={70} durationInFrames={116}>
				<AbsoluteFill>
					<MemberOne.Three />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={186} durationInFrames={32}>
				<AbsoluteFill>
					<MemberTwo.One />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={218} durationInFrames={38}>
				<AbsoluteFill>
					<MemberTwo.Two />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={256} durationInFrames={116}>
				<AbsoluteFill>
					<MemberTwo.Three />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={372} durationInFrames={32}>
				<AbsoluteFill>
					<MemberThree.One />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={404} durationInFrames={38}>
				<AbsoluteFill>
					<MemberThree.Two />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={442} durationInFrames={116}>
				<AbsoluteFill>
					<MemberThree.Three />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={558} durationInFrames={32}>
				<AbsoluteFill>
					<MemberFour.One />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={590} durationInFrames={38}>
				<AbsoluteFill>
					<MemberFour.Two />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={628} durationInFrames={124}>
				<AbsoluteFill>
					<MemberFour.Three />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={752} durationInFrames={32}>
				<AbsoluteFill>
					<MemberFive.One />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={784} durationInFrames={38}>
				<AbsoluteFill>
					<MemberFive.Two />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={822} durationInFrames={116}>
				<AbsoluteFill>
					<MemberFive.Three />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={938} durationInFrames={400}>
				<AbsoluteFill>
					<GroupShot />
				</AbsoluteFill>
			</Sequence>

			<Audio src={staticFile('bgm.mp3')} volume={1} />
		</AbsoluteFill>
	);
};
