import React from 'react';
import cls from './AboutListItem.module.css';

export default function AboutListItem({number, desk, h }) {
    return (
        <li className={cls.aboutLi}>
            <div className={cls.aboutUlHeaderWrapper}>
                <h1>{number}</h1>
                <p>{h}</p>
            </div>
            <p className={cls.aboutUlP}>{desk}</p>
        </li>
    )
}
