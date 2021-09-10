import React, {Fragment} from 'react'
import ReviewInput from './reviews/ReviewInput';
import Reviews from './reviews/Reviews';
import {List} from 'semantic-ui-react'


const SingleTrainer = ({singleTrainer, clearSingleTrainer, reviews}) => {
    return (
        <Fragment>
            <List>
                <List.Item>
                    <List.Icon name='users' />
                    <List.Content>
                        <h1>{`Name: ${singleTrainer[0].first_name} ${singleTrainer[0].last_name}`}</h1>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>New York, NY</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail' />
                    <List.Content>
                        <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='linkify' />
                    <List.Content>
                            <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                    </List.Content>
                </List.Item>
            </List>
        {/* // <div>
        //     <button onClick={() => clearSingleTrainer()}>GO HOME</button>
        //     <h1>{`Name: ${singleTrainer[0].first_name} ${singleTrainer[0].last_name}`}</h1>
        //     <p>{`Email: ${singleTrainer[0].email}`}</p>
        //     <p>{`Phone: ${singleTrainer[0].phone_number}`}</p>
        //     <p>{`Body building: ${singleTrainer[0].bodybuilding}`}</p>
        //     <p>{`Running: ${singleTrainer[0].running}`}</p>
        //     <p>{`Power lifting: ${singleTrainer[0].power_lifting}`}</p>
        //     <p>{`Swimming: ${singleTrainer[0].swimming}`}</p>
        //     <p>{`Cycling: ${singleTrainer[0].cycling}`}</p>
            <div> */}
            <ReviewInput />
            <Reviews reviews={reviews}/>
        </Fragment>
    )
}

export default SingleTrainer