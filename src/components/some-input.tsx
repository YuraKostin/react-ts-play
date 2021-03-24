import React, {FormEvent} from 'react'

interface Props {
    onInput: (value: string) => void
}

export const SomeInput: React.FC<Props> = ({ onInput }) => {
    return (
        <input onInput={(e: FormEvent<HTMLInputElement>) => onInput(e.currentTarget.value)}/>
    )
}


