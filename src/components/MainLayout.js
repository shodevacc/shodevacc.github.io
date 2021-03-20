import React from 'react'
import * as styles from '../style/index.module.css'

function MainLayout({children}) {
    return (
        <div className={styles.container}>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout
