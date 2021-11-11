

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
