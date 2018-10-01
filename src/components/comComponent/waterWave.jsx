import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import './waterWave.scss';
class WaterWaveComp extends React.Component {

   
	constructor(props) {
		super(props);
		this.state = {
            SEPARATION: 100,
            AMOUNTX: 50,
            AMOUNTY: 50,
            mouseX: 0,
            mouseY: 0,
            windowHalfX: window.innerWidth / 2,
            canvasHeight: this.props.maxHeight,
            windowHalfY: this.props.maxHeight+800,
            container:'',
            camera: '',
			scene: '',
            particles: [],
            renderer: '',
			count: 0,
		};
	}
    componentWillMount(){
        const { maxHeight } = this.props;
        
    }
    componentDidMount() {
		this.waveInit(this.animate);
	}

	waveInit = (callback) => {
		const {canvasHeight,AMOUNTX,AMOUNTY,SEPARATION,windowHalfX,windowHalfY} = this.state;
        let cameraThree = new THREE.PerspectiveCamera( 75, window.innerWidth / canvasHeight, 2, 10000 );
        cameraThree.position.z = 3000;
        let sceneThree = new THREE.Scene();
        let particles = [],i = 0, particle =0 ;
        const PI2 = Math.PI * 2;
        const material = new THREE.ParticleCanvasMaterial( {
            color: 0xffffff,
            program: function ( context ) {
                context.beginPath();
                context.arc( 0, 0, 1, 0, PI2, true );
                context.fill();
            }
        } );
        for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
            for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                particle = particles[ i ++ ] = new THREE.Particle( material );
                particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                sceneThree.add( particle );
            }
        }
        let rendererThree = new THREE.CanvasRenderer();
        rendererThree.setSize( window.innerWidth, canvasHeight);
        this.waveCanvas.appendChild( rendererThree.domElement );
        this.setState({
            mouseX: window.innerWidth / 2 - windowHalfX,
            mouseY: 100 - windowHalfY,
            camera: cameraThree,
            scene: sceneThree,
            particles: particles,
            renderer: rendererThree,
		},() => {
            callback();
        });
	}
    animate = () => {
        requestAnimationFrame( this.animate );
        this.renderWave();
    }

    renderWave = () => {
		const {camera,mouseX,mouseY,scene,AMOUNTX,AMOUNTY,particles,renderer,count} = this.state;
        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
        camera.lookAt( scene.position );
        let i = 0, particle = 0;
        for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

            for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                particle = particles[ i++ ];
                particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;
            }
        }
        renderer.render( scene, camera );
        this.setState({
			count:count+0.1
		});
    }

    render() {
		
		return (
            <div>
                 <h1 className='title'>水滴数字资产<br/>交易系统</h1>
			<div
				className="wave-content"
                ref={waveCanvas => {
                    this.waveCanvas = waveCanvas;
                }}
			></div>
           
            </div>
		);
	}
}

export default injectIntl(WaterWaveComp);
