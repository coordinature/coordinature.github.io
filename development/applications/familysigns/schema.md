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
- gesture_labeled
- gesture_stream
- gesture_length

### What tables are there?
1. activity stream
2. entity table

### How will we use these tables in our study?

#### example activity stream

| Timestamp |Activity      		|Entity 	|Features     |
|---------- |-------------------|-----------|-------------|
|15-12-2021 | Started gesture  |Participant  | Labeled with 'food' |
|16-12-2021 |Labeled gesture  |Participant  | Labeled with 'happy' |
|16-12-2021 |Saved gesture  |Participant  | Labeled with 'I am hungry' | 

##### Participant_stream
|                |                               |
|----------------|-------------------------------|
|activity_id	 |string	         |
|ts	 |	timestamp	|
| participant	 | string	|
| source	 | string	|
| feature_1	 | string	|


#### example entity table: Participant
|                |                               |
|----------------|-------------------------------|
| participant	 | string	|
|identifier		 |phone number			         |
|user_name		 |	string	|
|date_of_birth 	 | number	|


