import React from 'react'
import PageComponent from '../components/PageComponent'
import SurvayListItem from '../components/SurvayListItem';
import { useStateContext } from '../contexts/ContextProvider'

export default function Survey() {
    const { surveys } = useStateContext();

    const onDeleteClick = () => {
        console.log("on delete click");
    }

    return (
        <PageComponent title="Survey"> 
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map(survay => (
                    <SurvayListItem survay={survay} key={survay.id} onDeleteClick={onDeleteClick} />
                ))}
            </div>
        </PageComponent>
    )
}
