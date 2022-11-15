import React from 'react'
import FormInput from '../../../../components/FormInput/FormInput'
import DragNDrop from '../../../../components/DragNDrop/DragNDrop'

const styles = {
    banner: "border-solid border-[2px] border-gray flex items-center justify-center py-[2.5rem]",
    inputSection: "inline flex items-center justify-center mt-[1rem]",
    input_poster: "border-solid border-[2px] border-gray flex items-center justify-center w-[25%] h-[28rem]",
    input_detail: "flex flex-col ml-[7rem]"
}

function BasicDetails(props) {
    return (
        <>
            <DragNDrop message="Add banner here" classes={styles.banner} />
            <div className={styles.inputSection}>
                <DragNDrop message="Add poster here" classes={styles.input_poster} />
                <div className={styles.input_detail}>
                    <FormInput
                        type="text"
                        placehodler="title"
                        label="title"
                        name="title"
                        value={props.state.title}
                        changeHandler={props.changeHandler}
                    />
                    <FormInput
                        type="date"
                        placehodler=""
                        label="date"
                        name="date"
                        value={props.state.date}
                        changeHandler={props.changeHandler}
                    />
                    <FormInput
                        type="text"
                        placehodler="Describe your event here"
                        label="Description"
                        name="description"
                        value={props.state.description}
                        changeHandler={props.changeHandler}
                    />
                    <FormInput
                        type="text"
                        placehodler="BT auditorium, Mech seminar hall,.."
                        label="Venue"
                        name="venue"
                        value={props.state.venue}
                        changeHandler={props.changeHandler}
                    />
                </div>
            </div>
        </>
    )
}

export default BasicDetails