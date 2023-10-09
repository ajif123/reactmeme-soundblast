//image imports
import breakingbad from './img/breakingbad.jpg';
import vine from './img/vine.jpg';
import twitch from './img/twitch.jpg';
import africa from './img/africa.jpg';

//breaking bad sounds
import waltuh from './sounds/breakingbad/waltuh.mp3';
import waltsus from './sounds/breakingbad/waltsus.mp3';
import lookatme from './sounds/breakingbad/lookatme.mp3';
import gustavosus from './sounds/breakingbad/gustavosus.mp3';

//vine sounds
import tyrone from './sounds/vine/tyrone.mp3';
import ohmygod from './sounds/vine/ohmygod.mp3';
import flightreact from './sounds/vine/flightreact.mp3';
import boom from './sounds/vine/boom.mp3';
import amogus from './sounds/vine/amogus.mp3';

//twitch sounds
import jermateacher from './sounds/twitch/jermateacher.mp3';
import sixconsoles from './sounds/twitch/sixconsoles.mp3';
import tyler1car from './sounds/twitch/tyler1car.mp3';
import woobaby from './sounds/twitch/woobaby.mp3';

//africa sounds
import action from './sounds/africa/action.mp3';
import gwe from './sounds/africa/gwe.mp3';
import welcome from './sounds/africa/welcome.mp3';

const data = [
        {
            id: 1,
            name: 'Breaking Bad',
            image: breakingbad,
            sounds: [waltuh, waltsus, lookatme, gustavosus],
            soundNames: ['Waltuh', 'Walt sus', 'Look At Me Hector', 'Gustavo Sus']
        },
        {
            id: 2,
            name: 'Vine',
            image: vine,
            sounds: [tyrone, ohmygod, flightreact, boom, amogus],
            soundNames: ['Tyrone', 'Oh my god~~~', 'Reaction', 'BOOM', 'AMOGUS']
        },
        {
            id: 3,
            name: 'Twitch',
            image: twitch,
            sounds: [woobaby, tyler1car, sixconsoles, jermateacher],
            soundNames: ['Charlie Happy', 'Tyler1 car sound', 'XQC 6 consoles', 'Jerma Teacher']
        },
        {
            id: 4,
            name: 'Africa',
            image: africa,
            sounds: [welcome, gwe, action],
            soundNames: ['Welcome to UGANDA', 'GWE GWE GWE', 'Action is coming']
        },
]

export default data;