import React from 'react'

export default function AboutPrincCard({ h, p, cls }) {
    return (
        <div className={cls ? 'aboutPrincCard' + ' ' + cls : 'aboutPrincCard'}>
            <h2 style={{ marginBottom: 20 }}>{h}</h2>
            <p>{p}</p>
        </div>
    )
}
