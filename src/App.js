import React, { useState, useEffect } from 'react';

export default () => {
    const [prova, setProva] = useState('react')
    useEffect(() => {
        setTimeout(() => {
            setProva('effettuata con successo!')
        }, 2000)
    }, [])
    return <span>prova {prova}</span>
}
