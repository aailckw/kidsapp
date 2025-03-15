# KidsLearn: Gamified Learning Curriculum for Children Ages 2-12

A comprehensive educational application that uses playful, gamified learning with colorful 2D animations and interactive cartoon characters to engage children in a fun and educational experience.

## Overview

KidsLearn is designed for children aged 2-12, with age-appropriate content divided into four main groups:
- **Ages 2-4: Early Explorers** (Preschool Level)
- **Ages 5-7: Emerging Learners** (Kindergarten to Early Primary)
- **Ages 8-10: Independent Learners** (Upper Primary)
- **Ages 11-12: Young Achievers** (Middle School Prep)

The application covers a broad range of subjects:
- English
- Chinese
- Mathematics
- Science
- Hygiene
- Manners
- Art
- Music
- Social Studies

## Key Features

- **Age-appropriate learning content** tailored to children's developmental stages
- **Gamification elements** like points, levels, and rewards to keep learners motivated
- **Interactive cartoon characters** that guide children through learning activities
- **Colorful 2D animations** that make complex concepts easy to understand
- **Progress tracking** for parents to monitor their child's development

## Project Structure

The project is built using Next.js with the App Router architecture, and is organized as follows:

```
src/
  ├── app/
  │    ├── (auth)/            # Authentication-related pages (login, register)
  │    ├── (dashboard)/       # Dashboard pages and learning content
  │    │    ├── age-2-4/      # Content for Ages 2-4 group
  │    │    ├── age-5-7/      # Content for Ages 5-7 group
  │    │    ├── age-8-10/     # Content for Ages 8-10 group
  │    │    └── age-11-12/    # Content for Ages 11-12 group
  │    └── api/               # API routes
  ├── components/             # Reusable UI components
  ├── assets/                 # Static assets (images, sounds, animations)
  └── lib/                    # Utility functions and helpers
```

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/kidsapp.git
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Technologies Used

- **Next.js** - React framework with App Router
- **TypeScript** - For type safety
- **Tailwind CSS** - For styling
- **React** - UI library

## Future Enhancements

- User authentication and profile management
- Parent dashboard for monitoring progress
- Offline mode for learning without internet connection
- More interactive games and activities
- Multi-language support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Educational content designed based on research in early childhood development
- Inspired by proven teaching methodologies for different age groups
