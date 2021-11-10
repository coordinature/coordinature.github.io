## Activity Schema
In this document we will explain what activity schema is and how we will implement it for our study to gather questions and gestures from the participants.

## table of content
- dictionary
- what is activity schema?
- Why is activity schema useful?
- how will we implement activity schema in our study?
- What will the conceptual overview of our activity stream be?
- What tables are there?
- How will we use these tables in our study?
	- example table
    
## dictionary
A **query** is a question or a request for information about something.


### What is activity schema?
It is a data managing metholody that is offering an alternative to generally used schematics such as star schema's.

It is consisting of a signle timeseries table, called activity stream.
within this table we will track the activities that an entity takes over time.

### Why is activity schema useful?
It's core goal is to reduce complexitiy, by reducing dependenties.
When using to many dependenties, the dataset can be messy to find your inputs and can cause errors in the code.

### How will we implement activity schema in our study?
1. We will map out the components that we will need for the activity stream. This is consisting of an entity, activities and features.
2. We will create our dashboard based on this model.
3. We will connect our app data to the activity stream.
4. We will use these activity streams to run a machine learning model on, to learn from each stream.
5. We will use these activity streams to query our research questions and show these questions answered in a report.


### What will the conceptual overview of our activity stream be?
#### Entities:
- participant
	- initiator
    - all
#### Acitivities
- Onboarding: Creating an account and loggin in into the system
- Questionaires: opening the forms, Viewing questions and answering questions, submitting the forms.
- Questionloop: choosing topics, viewing questions, answering questions, generating new topics.
- gesturing: selecting a word to create a gesture, or starting a gesture from scratch. Creating a gesture, labeling a gesture, saving a gesture, sharing a gesture.
- library: opening the library, viewing a gesture, editing the gestures label, retraining the gesture, changing the gesture or deleting the gesture.

#### Features
- time_on_page
- time_writing
- time_on_task
- task_succes_rate
- Number_of_clicks
- Difficulty_rating
- gesture_labeled
- gesture_stream
- gesture_length


### What tables are there?
1. activity stream
2. entity table

### How will we use these tables in our study?



__Answer Stream__
| Timestamp  | Activity         | Entity 	             | answer-id           | activity-label
|----------  |----------------- | -----------            | -------------       | ------------
| 15-12-2021 | define text   | {{ participant_id }} | {{ statement_id }}  | 'food' 
| 16-12-2021 | create gesture     | {{ participant_id }} | {{ gesture_id }}    | 'personal'



__Gesture Stream__
| Timestamp  | Activity    | Entity 	          | gesture-id        | activity-label
|----------  |------------ | -----------          | -------------     | ------------
| 15-12-2021 | gesture     | {{ participant_id }} | {{ gesture_id }}  | 'food' 
| 16-12-2021 | gesture     | {{ participant_id }} | {{ gesture_id }}  | 'personal'


| Name             | Type         | Example
|----------        |-----------------
| signal_id        | string        | 1231
| signal_time      | timestamp     | 12123123
| signal_text      | string        | 'I am hungry'
| signal-label     | string        | Food
| signal_library   | string        | Personal
| signal_signature | {{  }} | 


__Signal Stream__
| Timestamp  | Activity    | Entity                | signal        | signal-text    
| 16-12-2021 | signal      | {{ participant_id }}  | {{ signal_id }}  | 'I am hungry'  
| 16-12-2021 | signal      | {{ participant_id }}  | {{ signal_id }}  | 'I was very happy when I got' 


| Name             | Type          | Example 1    | Example 2    |
|----------        |---------------| ------------ | ------------ |
| signal_id        | string        | 1231         | 1271         |
| signal_time      | timestamp     | 12178923     | 12123897     |
| signal_text      | string        | I am hungry  | I was happy  |
| signal-label     | string        | Food         |          |
| signal_library   | string        | Personal     | Personal     |
| signal_signature | {{  }} | 


__Question Stream__

| Timestamp  | Activity          | Entity 	           | question-id        | activity-label
|----------  |-----------------  | -----------          | -------------     | ------------
| 15-12-2021 | Topic selected    | {{ participant_id }} | {{ question_id }} | 'school' 
| 16-12-2021 | Question Openend  | {{ participant_id }} | {{ question_id }} | 'When were you last very happy at school?'
| 16-12-2021 | Question Answered | {{ participant_id }} | {{ question_id }} | 'I was very happy when I got picked for the main role of the school play'
| 16-12-2021 | Topic generated   | {{ participant_id }} | {{ question_id }} | 'dancing'


| Timestamp  | Activity          | Entity 	           | question-id        | activity-label
|----------  |-----------------  | -----------          | -------------     | ------------
| 15-12-2021 | Library Openend   | {{ participant_id }} | {{ question_id }} | 
| 16-12-2021 | Gesture viewed	 | {{ participant_id }} | {{ question_id }} | 
| 16-12-2021 | Gesture shared	 | {{ participant_id }} | {{ question_id }} | 
| 16-12-2021 | Collection created| {{ participant_id }} | {{ question_id }} | 
| 16-12-2021 | Member invited	 | {{ participant_id }} | {{ question_id }} | 
| 16-12-2021 | Account created	 | {{ participant_id }} | {{ question_id }} | 


__Question Activity Stream (Columns)__

|                |              |
|----------------|--------------|
| activity_id	 | string	    |
| ts	         | timestamp	|
| question_id	 | string	    |
| activity-label | string	    |
| participant_id | string	    |


__Questions Entity (Fields)__

|                  |               |
|----------------  |---------------|
| question_id	   | string	     |
| label            | string    	 |
| Difficulty_rating| string    	 |
| Number_of_clicks | string    	 |
| time_on_task     | string    	 |
| time_writing     | string    	 |


__Gesture Activity Stream (Columns)__

|                |              |
|----------------|--------------|
| activity_id	 | string	    |
| activity_label | string	    |
| ts	         | timestamp	|
| gesture_id	 | string	    |
| gesture_label  | string    	|
| participant_id | string	    |


__Gesture Entity (Fields)__

|                |               |
|----------------|---------------|
| gesture_id	 | string	     |
| participant_id | string        |
| ts             | timestamp     |
| gesture_label  | string    	 |
| gesture_stream | string    	 |
| gesture_length | string    	 |


__Participant Entity (Fields)__
| participant_id | string        |
| phone_nr       | phone number  |
| user_name		 | string	     |
| first_name	 | string	     |
| last_name		 | string	     |
| date_of_birth  | date	         |
| email_adress   | string        |


