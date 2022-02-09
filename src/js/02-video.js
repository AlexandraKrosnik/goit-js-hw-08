import throttle from 'lodash/throttle'
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
console.log(player);

window.onload = () =>
{
    let isTime = localStorage.getItem("videoplayer-current-time");
    if (isTime)
    {
        let time = JSON.parse(isTime).seconds;
        player.setCurrentTime(time);
        //console.log(time);
    }
}

player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}, 1000));

