import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import playIcon from './assets/icons/play.svg';
import pauseIcon from './assets/icons/pause.svg';
import standByMeSong from './assets/audios/standbyme.mp3';
import childrenoflumiere from './assets/audios/childrenoflumiere.mp3'

const MusicPlayer = () => {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioPlayer = useRef(null);
    const songName = "Children of Lumière";
    const artistName = "Clair Obscur: Expedition 33";

    const handleTimeUpdate = () => {
        if (audioPlayer.current) {
            setCurrentTime(audioPlayer.current.currentTime);
        }
    };

    const handleSongEnd = () => {
        setIsPlaying(false);
        setCurrentTime(0);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    function toggleMusicTheme() {
        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="flex items-center gap-2 z-5">
            <div className="bg-gray-100 shadow-sm rounded-full hover:bg-gray-50">
                <button onClick={toggleMusicTheme} className="inline-flex items-center justify-center gap-3 p-3">
                    <img src={isPlaying ? pauseIcon : playIcon} className="w-4 text-stone-700 invert" alt={t('playMusicAlt')} />
                    <audio ref={audioPlayer} onTimeUpdate={handleTimeUpdate} onEnded={handleSongEnd}>
                        <source src={childrenoflumiere} type="audio/mpeg" />
                    </audio>
                </button>
            </div>

            <div className="flex flex-col justify-start items-start text-left text-[.7em] w-[70%] text-black">
                <span>{songName} - {artistName}</span>
                <span className="text-xs">{formatTime(currentTime)}</span>
            </div>
        </div>
    );
};

export default MusicPlayer;