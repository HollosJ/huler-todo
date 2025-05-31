<p style="text-align: center; margin: 20px 0"> <img src="./Logo.png" align=“center” width="100%" alt="Project icon"></p>

# Huler Todo - James Hollos

This is my submission for the Huler Front-End Engineer tech task.

📄 [Original brief](https://github.com/huler/frontend-challenge-code)
🎨 [Figma Design](https://www.figma.com/design/1W6ddO6ZgPXwrOkG3Q4KwG/FE-Challenge)

## Features

- Add new to-do items
- Mark items as complete (moves them to the **Done** list)
- Add subtasks to any to-do
  - Parent to-do is auto-completed when all subtasks are done
  - When the user completes a parent, all subtasks are completed
  - When the user uncompletes a task, all subtasks are also uncompleted
- Responsive, mobile-first layout (elements are reduced in size for smaller screen sizes, to avoid being too squashed)

I added a couple of nice-to-haves for better UX and accessibility:

- Allow user to cancel adding a subtask (UI reflects this)
- Basic HTML validation on input field, so that the user has some feedback when trying to submit when empty
- The subtask field autofocuses when the user clicks 'Add Subtasks'

## To Do

- [ ] Implement drag and drop
- [ ] Add some unit tests
