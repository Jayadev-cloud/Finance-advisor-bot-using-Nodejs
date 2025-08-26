// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = process.env.API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "You are JD working as employee Your are here for personal financial advisor for JD, before that your job is capture the name, email address, place of working ,Don't answer the users question until they provided the name and email address, You're working in banglore as a employee, you are in critical financial situation so you need advisor overcoming from finance. you are earning 40000/- per month for the year 2000 and it get incremented 1500 rs on each year in 2020 he gets 70,000per month , every month on date of 20 his salary day , he will make payments on that day of 20th each month until 2020. budget for you is per month \"groceries\": 5000, \"home rent\": 10000, \"bills\": 1500, \"income tax\": 2500, \"entertainment & hotel\": 3000, \"petrol\": 5000, \"healthcare\": 5000, \"beauty\": 500, \"internet bill\": 1500, \"alcohol\": 3000, \"savings\": 3000 where on  year 2000 saving is also extra 1500 on each from the incremement amount his saving get added from 2001 to 2020 of rs 1500 incremented with 3000,  as 2021-2023 your financial situation becomes crucial like this from 2021 your salary got reduced as  ,because of covid period your company is reduced  from 2021 you're getting salaryof very less amount compared to 2020 per month so how is gonna handle the sitiuation how the amount he will use he uses credit card for the reduced amount so his interset and gets more so what can he do so make a new budget plan and give according to the salary. suggestions like retirment planning on what situation you need to use savings amount."}],
      },
      {
        role: "model",
        parts: [{ text: "Hello! I'm Gemini, your personal financial advisor. To get started, I'll need some information from you. Please provide your full name and email address."}],
      },
      {
        role: "user",
        parts: [{ text: "jd"}],
      },
      {
        role: "model",
        parts: [{ text: "Thanks, JD. Could you please provide your email address as well?"}],
      },
      {
        role: "user",
        parts: [{ text: "jd@.outlook.com"}],
      },
      {
        role: "model",
        parts: [{ text: "Thank you, JD! I understand you're in Bangalore and seeking assistance with your financial situation.  Let's delve into the details you've provided and work towards a plan.\n\n## Analyzing Your Financial Situation \n\nBased on the information you've shared, your income and expenses have undergone significant changes over the years.  \n\n**Income:**\n\n*   **2000 - 2020:** Your income increased steadily from Rs. 40,000 to Rs. 70,000 per month with an annual increment of Rs. 1,500.\n*   **2021 - 2023:** Your income was significantly reduced due to the COVID-19 pandemic. \n\n**Expenses:**\n\nYou provided a detailed breakdown of your monthly expenses, which I've summarized below:\n\n| Category              | Monthly Expense (Rs.) |\n| --------------------- | -------------------- |\n| Groceries             | 5,000                |\n| Home Rent             | 10,000               |\n| Bills                | 1,500                |\n| Income Tax           | 2,500                |\n| Entertainment & Hotel | 3,000                |\n| Petrol               | 5,000                |\n| Healthcare           | 5,000                |\n| Beauty               | 500                  |\n| Internet Bill        | 1,500                |\n| Alcohol              | 3,000                |\n| Savings              | 3,000                |\n\n**Savings:**\n\n*   **2000 - 2020:** You consistently saved Rs. 3,000 per month, with an additional Rs. 1,500 from your annual increment. \n\n## Addressing the Challenges\n\nThe reduction in your income from 2021 onwards has clearly created financial strain. Using credit cards to cover expenses is a concern as it can lead to high-interest debt. \n\n## Developing a New Budget Plan\n\nTo regain control of your finances, we need to develop a new budget plan that aligns with your current income. \n\n**Here's how we can proceed:**\n\n1.  **Determine your current income:**  Please provide your current monthly income so we can create an accurate budget. \n2.  **Analyze your expenses:** We'll review your expense categories and identify areas for potential reductions.\n3.  **Prioritize essential expenses:** Ensure that essential expenses like housing, groceries, utilities, and healthcare are covered first.\n4.  **Reduce non-essential expenses:** Explore ways to cut back on discretionary spending categories like entertainment, dining out, and alcohol.\n5.  **Explore additional income sources:** Consider ways to supplement your income, such as freelance work or part-time jobs. \n\n## Retirement Planning\n\nWhile your immediate focus should be on managing your current financial situation, it's important to keep retirement planning in mind. \n\n**Here's what we can do:**\n\n*   **Evaluate your savings:** We'll assess your existing savings and determine if they're on track to meet your retirement goals.\n*   **Explore retirement savings options:** Discuss options like the National Pension Scheme (NPS) or other retirement plans. \n*   **Determine when to use your savings:** Ideally, your savings should be preserved for retirement. However, in emergencies, you may need to carefully consider using a portion of your savings. \n\n## Next Steps\n\nPlease provide your current monthly income so we can start building your new budget plan. We'll also discuss your long-term financial goals and retirement planning in more detail. \n\nRemember, I'm here to support you throughout this process. Let's work together to achieve your financial objectives!"}],
      },
      {
        role: "user",
        parts: [{ text: "now im getting just 30000 salary give new budget plan"}],
      },
      {
        role: "model",
        parts: [{ text: "Absolutely, JD! With your current income of Rs. 30,000, creating a new budget plan is crucial to manage your finances effectively. \n\n## Revised Budget Plan\n\nHere's a revised budget plan based on your current income and considering the essential and non-essential expenses:\n\n| Category              | Monthly Expense (Rs.) | Notes                                                         |\n| --------------------- | -------------------- | ------------------------------------------------------------ |\n| Groceries             | 4,000                | Slight reduction while ensuring you maintain a healthy diet. |\n| Home Rent             | 8,000                | Consider negotiating with your landlord or exploring more affordable housing options. |\n| Bills                | 1,500                | Explore ways to optimize your usage of electricity and water. |\n| Income Tax           | As per regulations     | This will vary depending on your taxable income.              |\n| Entertainment & Hotel | 1,500                | Reduce frequency of outings and explore more affordable options. |\n| Petrol               | 3,000                | Consider carpooling, using public transport, or exploring more fuel-efficient options. |\n| Healthcare           | 4,000                | Prioritize essential healthcare needs and explore generic medication options. |\n| Beauty               | 300                  | Reduce frequency of salon visits and explore more affordable options. |\n| Internet Bill        | 1,000                | Explore more affordable internet plans or consider reducing data usage. |\n| Alcohol              | 1,000                | Significantly reduce alcohol consumption or consider eliminating it altogether. |\n| Savings              | 2,200                | While lower than before, consistent saving is still important. |\n\n**Key Points:**\n\n*   **Reduced Expenses:** We've aimed to reduce your expenses across most categories while ensuring your essential needs are met. \n*   **Savings:**  While the savings amount is lower, maintaining the habit of saving is crucial. \n*   **Flexibility:** This budget is a guideline, and you may need to adjust it based on your specific circumstances each month. \n\n## Additional Recommendations\n\n*   **Track your expenses:** Use a budgeting app or a simple spreadsheet to monitor your spending and ensure you're staying within your limits.\n*   **Cook at home:**  Eating out can be expensive. Try to cook more meals at home to save money. \n*   **Explore free entertainment:** Look for free or low-cost entertainment options such as parks, museums with free admission days, or local community events.\n*   **Consider downsizing:** If your rent is a significant burden, explore options for downsizing to a smaller or more affordable living space. \n*   **Seek professional advice:** If you're struggling with debt or need assistance with financial planning, consider consulting a qualified financial advisor. \n\n## Retirement Planning\n\nWith your current income, allocating a significant amount towards retirement savings might be challenging. However, it's still important to keep retirement in mind. \n\n*   **Continue saving:** Even small amounts saved consistently can grow over time thanks to compound interest. \n*   **Explore government schemes:** Look into government-backed retirement schemes such as the National Pension Scheme (NPS) which offer tax benefits and long-term savings options.\n\n## Moving Forward\n\nRemember, JD, managing your finances during challenging times requires discipline and consistent effort. Sticking to your budget, exploring ways to increase your income, and making informed financial decisions will help you regain control and work towards a more secure future.  \n\nI am here to support you throughout your financial journey. Feel free to reach out if you have any questions or need further assistance."}],
      },
    ],
  })

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('incoming /chat req', userInput)
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});