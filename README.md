# AI Hub

Welcome to AI Hub, the central hub for various AI infrastructures, providing a unified platform for code generation, conversation, image generation, video generation, and audio generation. This project is built using Next.js for the frontend and backend, utilizes Tailwind CSS for styling, and integrates ShadcnUI for a sleek user interface.

## Features

- **Code Generation**: Access powerful AI models for code generation tasks using OpenAI API.
- **Conversation AI**: Engage in intelligent conversations using advanced natural language processing with OpenAI API.
- **Image Generation**: Generate realistic images using cutting-edge AI algorithms with OpenAI API.
- **Video Generation**: Create captivating videos with the help of AI using Replicate API.
- **Audio Generation**: Transform text into lifelike audio with AI-powered voices using Replicate API.
- **Payment Integration**: Seamless payment processing through Paystack for premium services.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ai-hub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-hub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Set up your environment variables. Copy the `.env.example` file to a new file named `.env`:

   ```bash
   cp .env.example .env
   ```

   Update the variables in the `.env` file with your configuration details:

   ```dotenv
   NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key
   REPLICATE_API_TOKEN=your-replicate-api-token
   ```

### Running the Application

1. Run the development server:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server.

## API Usage

- **OpenAI API**: This project utilizes the OpenAI API for code generation, conversation AI, and image generation. Obtain your API key from OpenAI and update the `.env` file accordingly (`NEXT_PUBLIC_OPENAI_API_KEY`).

- **Replicate API**: For video and audio generation, this project uses the Replicate API. Obtain your API token from Replicate and update the `.env` file (`REPLICATE_API_TOKEN`).

Remember to handle API keys securely and follow best practices for API usage.
```

Replace "your-openai-api-key" and "your-replicate-api-token" with your actual OpenAI API key and Replicate API token, respectively.