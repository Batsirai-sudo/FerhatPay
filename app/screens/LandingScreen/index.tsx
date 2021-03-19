import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, TextInput } from 'react-native';
import { Text } from '@components';
import { Images } from '@config';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { ROUTES } from '@config';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');
const {
	Value,
	event,
	block,
	cond,
	eq,
	set,
	Clock,
	startClock,
	stopClock,
	debug,
	timing,
	clockRunning,
	interpolate,
	Extrapolate,
	concat,
} = Animated;

function runTiming(clock, value, dest) {
	const state = {
		finished: new Value(0),
		position: new Value(0),
		time: new Value(0),
		frameTime: new Value(0),
	};

	const config = {
		duration: 1000,
		toValue: new Value(0),
		easing: Easing.inOut(Easing.ease),
	};

	return block([
		cond(clockRunning(clock), 0, [
			set(state.finished, 0),
			set(state.time, 0),
			set(state.position, value),
			set(state.frameTime, 0),
			set(config.toValue, dest),
			startClock(clock),
		]),
		timing(clock, state, config),
		cond(state.finished, debug('stop clock', stopClock(clock))),
		state.position,
	]);
}

class LandingScreen extends Component {
	state = {
		spinner: true,
		status: true,
	};
	constructor() {
		super();

		this.buttonOpacity = new Value(1);

		this.onStateChange = event([
			{
				nativeEvent: ({ state }) =>
					block([cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 1, 0)))]),
			},
		]);

		this.onCloseState = event([
			{
				nativeEvent: ({ state }) =>
					block([cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 0, 1)))]),
			},
		]);

		this.buttonY = interpolate(this.buttonOpacity, {
			inputRange: [0, 1],
			outputRange: [100, 0],
			extrapolate: Extrapolate.CLAMP,
		});

		this.bgY = interpolate(this.buttonOpacity, {
			inputRange: [0, 1],
			outputRange: [-height / 3 - 100, 0],
			extrapolate: Extrapolate.CLAMP,
		});
		this.textInputZindex = interpolate(this.buttonOpacity, {
			inputRange: [0, 1],
			outputRange: [1, -1],
			extrapolate: Extrapolate.CLAMP,
		});
		this.textInputY = interpolate(this.buttonOpacity, {
			inputRange: [0, 1],
			outputRange: [0, 100],
			extrapolate: Extrapolate.CLAMP,
		});

		this.textInputOpacity = interpolate(this.buttonOpacity, {
			inputRange: [0, 1],
			outputRange: [1, 0],
			extrapolate: Extrapolate.CLAMP,
		});
		this.rotateCross = interpolate(this.buttonOpacity, {
			inputRange: [0, 1],
			outputRange: [180, 360],
			extrapolate: Extrapolate.CLAMP,
		});
	}

	componentDidMount() {
		this.setState({ spinner: false });
	}

	render() {
		const { navigate } = this.props.navigation;
		const { t } = this.props;
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.topAnimatedView, { transform: [{ translateY: this.bgY }] }]}>
					<Svg height={height + 50} width={width}>
						<ClipPath id="clip">
							<Circle r={height + 50} cx={width / 2} />
						</ClipPath>
						<Image
							href={Images.background1}
							width={width}
							height={height + 50}
							preserveAspectRatio="xMidYMid slice"
							clipPath="url(#clip)"
						/>
					</Svg>
				</Animated.View>
				<View style={styles.bottomView}>
					<TapGestureHandler onHandlerStateChange={this.onStateChange}>
						<Animated.View
							style={{
								...styles.button,
								opacity: this.buttonOpacity,
								flexDirection: 'row',
								borderWidth: 1,
								borderColor: 'white',
								transform: [{ translateY: this.buttonY }],
								top: -250,
							}}
						>
							<Text style={styles.getStartedText}>{t('get_stated')}</Text>
							<Ionicons name="md-arrow-forward" style={styles.getStartedIcon} />
						</Animated.View>
					</TapGestureHandler>

					<Animated.View
						style={[
							styles.bottomAnimatedView,
							{
								zIndex: this.textInputZindex,
								opacity: this.textInputOpacity,
								transform: [{ translateY: this.textInputY }],
							},
						]}
					>
						<ImageBackground source={Images.map} style={styles.bgImage}>
							<ImageBackground source={Images.thread} style={styles.bgImage}>
								<TapGestureHandler onHandlerStateChange={this.onCloseState}>
									<Animated.View style={styles.closeButton}>
										<Animated.Text
											style={{
												fontSize: 15,
												transform: [{ rotate: concat(this.rotateCross, 'deg') }],
											}}
										>
											X
										</Animated.Text>
									</Animated.View>
								</TapGestureHandler>

								<TouchableOpacity onPress={() => navigate(ROUTES.Login)}>
									<Animated.View
										style={{
											...styles.button,
											borderWidth: 1,
											justifyContent: 'center',

											shadowOffset: { width: 5, height: 13 },
											shadowColor: 'black',
											shadowOpacity: 0.2,
											marginTop: 50,
										}}
									>
										<Text style={{ fontSize: 20 }}>{t('login')}</Text>
									</Animated.View>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => navigate(ROUTES.OTPMobileNumber)}>
									<Animated.View
										style={{
											...styles.button,
											backgroundColor: 'rgba(0,0,0,0.8)',
											// borderWidth: 1,
											borderColor: 'black',
											shadowOffset: { width: 56, height: 13 },
											shadowColor: 'black',
											shadowOpacity: 0.2,
											elevation: 6,
										}}
									>
										<Text
											style={{
												fontSize: 20,
												color: '#fff',
											}}
										>
											{t('signup')}
										</Text>
									</Animated.View>
								</TouchableOpacity>
							</ImageBackground>
						</ImageBackground>
					</Animated.View>
				</View>
			</View>
		);
	}
}

export default function Landing(props) {
	const { t } = useTranslation();

	return <LandingScreen {...props} t={t} />;
}
