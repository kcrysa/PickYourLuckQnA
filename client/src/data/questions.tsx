import { CodeBlock, dracula } from "react-code-blocks";
import { IQuestion } from "../models/Question";

export const questions: IQuestion[] = [
  // THEORY
  {
    id: 1,
    categoryId: 6,
    text: "Which data structure is used for implementing a Last-In-First-Out (LIFO) behavior?",
    answers: [
      {
        id: 1,
        text: "Queue",
      },
      {
        id: 2,
        text: "Stack",
      },
      {
        id: 3,
        text: "Tree",
      },
      {
        id: 4,
        text: "Linked list",
      },
    ],
    answerId: 2,
  },
  {
    id: 2,
    categoryId: 6,
    text: "Which data structure is used for storing a collection of elements in a non-linear fashion?",
    answers: [
      {
        id: 1,
        text: "Array",
      },
      {
        id: 2,
        text: "Stack",
      },
      {
        id: 3,
        text: "Queue",
      },
      {
        id: 4,
        text: "Tree",
      },
    ],
    answerId: 4,
  },
  {
    id: 3,
    categoryId: 6,
    text: "Which of the following is a type of web server?",
    answers: [
      {
        id: 1,
        text: "Apache HTTP Server",
      },
      {
        id: 2,
        text: "Nginx",
      },
      {
        id: 3,
        text: "Microsoft IIS",
      },
      {
        id: 4,
        text: "All of the options",
      },
    ],
    answerId: 4,
  },
  {
    id: 4,
    categoryId: 6,
    text: "Recursion is a method in which the solution of a problem depends on ____________",
    answers: [
      {
        id: 1,
        text: "Larger instances of different problems",
      },
      {
        id: 2,
        text: "Larger instances of the same problem",
      },
      {
        id: 3,
        text: "Smaller instances of the same problem",
      },
      {
        id: 4,
        text: "Smaller instances of different problems",
      },
    ],
    answerId: 3,
  },
  {
    id: 5,
    categoryId: 6,
    text: "What are the key components of DevOps?",
    answers: [
      {
        id: 1,
        text: "Cost savings and scalability",
      },
      {
        id: 2,
        text: "Continuous Integration",
      },
      {
        id: 3,
        text: "Continuous Delivery & Monitoring",
      },
      {
        id: 4,
        text: "All of the options",
      },
    ],
    answerId: 4,
  },
  {
    id: 6,
    categoryId: 6,
    text: "What is the use of Git?",
    answers: [
      {
        id: 1,
        text: "Containerization tool",
      },
      {
        id: 2,
        text: "Continuous Integration tool",
      },
      {
        id: 3,
        text: "Version Control System tool",
      },
      {
        id: 4,
        text: "Continuous Monitoring tool",
      },
    ],
    answerId: 3,
  },
  {
    id: 7,
    categoryId: 6,
    text: "If for an algorithm time complexity is given by O(n) then the complexity of it is...",
    answers: [
      {
        id: 1,
        text: "constant",
      },
      {
        id: 2,
        text: "linear",
      },
      {
        id: 3,
        text: "exponential",
      },
      {
        id: 4,
        text: "none of the options",
      },
    ],
    answerId: 2,
  },
  {
    id: 8,
    categoryId: 6,
    text: "Which of the following is not a valid format specifier for printf in C?",
    answers: [
      {
        id: 1,
        text: "%b",
      },
      {
        id: 2,
        text: "%c",
      },
      {
        id: 3,
        text: "%d",
      },
      {
        id: 4,
        text: "%e",
      },
    ],
    answerId: 1,
  },
  {
    id: 9,
    categoryId: 6,
    text: "Which of the following is not a primitive data type in Java?",
    answers: [
      {
        id: 1,
        text: "boolean",
      },
      {
        id: 2,
        text: "char",
      },
      {
        id: 3,
        text: "string",
      },
      {
        id: 4,
        text: "int",
      },
    ],
    answerId: 3,
  },
  // STYLING
  {
    id: 10,
    categoryId: 5,
    text: (
      <>
        <p>What type of CSS is the following code snippet?</p>
        <CodeBlock
          text={"<h1 style='color:blue;'>A Blue Heading</h1>"}
          language="c"
          showLineNumbers={false}
          theme={dracula}
        />
      </>
    ),
    answers: [
      { id: 1, text: "Inline" },
      { id: 2, text: "Internal" },
      { id: 3, text: "External" },
      { id: 4, text: "Invalid code" },
    ],
    answerId: 1,
  },
  {
    id: 11,
    categoryId: 5,
    text: "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
    answers: [
      {
        id: 1,
        text: "tag",
      },
      {
        id: 2,
        text: "id",
      },
      {
        id: 3,
        text: "class",
      },
      {
        id: 4,
        text: "both class and tag",
      },
    ],
    answerId: 2,
  },
  {
    id: 12,
    categoryId: 5,
    text: "Which of the following CSS property is used to make the text bold?",
    answers: [
      {
        id: 1,
        text: "text-decoration: bold",
      },
      {
        id: 2,
        text: "font-weight: bold",
      },
      {
        id: 3,
        text: "font-style: bold",
      },
      {
        id: 4,
        text: "text-align: bold",
      },
    ],
    answerId: 2,
  },
  {
    id: 13,
    categoryId: 5,
    text: "How can we select an element with a specific ID in CSS?",
    answers: [
      {
        id: 1,
        text: "#",
      },
      {
        id: 2,
        text: ".",
      },
      {
        id: 3,
        text: "^",
      },
      {
        id: 4,
        text: "None of the options",
      },
    ],
    answerId: 1,
  },
  {
    id: 14,
    categoryId: 5,
    text: "How can we select an element with a specific class in CSS?",
    answers: [
      {
        id: 1,
        text: "#",
      },
      {
        id: 2,
        text: ".",
      },
      {
        id: 3,
        text: "^",
      },
      {
        id: 4,
        text: "None of the options",
      },
    ],
    answerId: 2,
  },
  {
    id: 15,
    categoryId: 5,
    text: (
      <>
        <p>
          In the below code snippet, in what order will the margins be added?
        </p>
        <CodeBlock
          text={`p {
            margin: 25px 50px 75px 100px;
          }`}
          language="c"
          showLineNumbers={false}
          theme={dracula}
        />
      </>
    ),
    answers: [
      { id: 1, text: "Top, Right, Bottom, Left" },
      { id: 2, text: "Top, Left, Bottom, Right" },
      { id: 3, text: "Top, Bottom, Right, Left" },
      { id: 4, text: "Left, Right, Top, Bottom" },
    ],
    answerId: 1,
  },
  {
    id: 16,
    categoryId: 5,
    text: "What is CSS?",
    answers: [
      { id: 1, text: "CSS is a style sheet language" },
      {
        id: 2,
        text: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
      },
      { id: 3, text: "CSS is the language used to style the HTML documents" },
      { id: 4, text: "All of the mentioned" },
    ],
    answerId: 4,
  },
  {
    id: 17,
    categoryId: 5,
    text: "Which HTML tag is used to link an external CSS file?",
    answers: [
      { id: 1, text: "<style>" },
      { id: 2, text: "<link>" },
      { id: 3, text: "<css>" },
      { id: 4, text: "<script>" },
    ],
    answerId: 2,
  },
  {
    id: 19,
    categoryId: 5,
    text: "How can you select all paragraphs within a div with the class 'content' in CSS?",
    answers: [
      { id: 1, text: ".content p" },
      { id: 2, text: "div.content p" },
      { id: 3, text: "div p.content" },
      { id: 4, text: "p.content" },
    ],
    answerId: 2,
  },
  // DEBUGGING
  {
    id: 18,
    categoryId: 4,
    text: (
      <>
        <p>Predict the output of the following program:</p>
        <CodeBlock
          text={`char inchar = 'A';
switch (inchar)
{
case 'A' :
    printf ("Choice A \\n") ;
case 'B' :
    printf ("Choice B ") ;
case 'C' :
case 'D' :
case 'E' :
default:
    printf ("No Choice") ;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "No choice",
      },
      {
        id: 2,
        text: "Choice A",
      },
      {
        id: 3,
        text: (
          <>
            <p>Choice A</p>
            <p>Choice B No choice</p>
          </>
        ),
      },
      {
        id: 4,
        text: "Program gives no output as it is erroneous.",
      },
    ],
    answerId: 3,
  },
  {
    id: 19,
    categoryId: 4,
    text: (
      <>
        <p>Predict the output of the following program:</p>
        <CodeBlock
          text={`#include <stdio.h>

int fun(int n)
{
    if (n == 4)
      return n;
    else return 2*fun(n+1);
}

int main()
{
  printf("%d", fun(2));
  return 0;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "4",
      },
      {
        id: 2,
        text: "8",
      },
      {
        id: 3,
        text: "16",
      },
      {
        id: 4,
        text: "Runtime error",
      },
    ],
    answerId: 3,
  },
  {
    id: 20,
    categoryId: 4,
    text: (
      <>
        <p>
          Consider the following recursive function fun(x, y). What is the value
          of fun(4, 3):
        </p>
        <CodeBlock
          text={`int fun(int x, int y) 
{
  if (x == 0)
    return y;
  return fun(x - 1,  x + y);
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "13",
      },
      {
        id: 2,
        text: "12",
      },
      {
        id: 3,
        text: "9",
      },
      {
        id: 4,
        text: "10",
      },
    ],
    answerId: 1,
  },
  {
    id: 21,
    categoryId: 4,
    text: (
      <>
        <p>What is the output of the following program?</p>
        <CodeBlock
          text={`#include<stdio.h>
void print(int n)
{
    if (n > 4000)
        return;
    printf("%d ", n);
    print(2*n);
    printf("%d ", n);
}
  
int main()
{
    print(1000);
    getchar();
    return 0;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "1000 2000 4000",
      },
      {
        id: 2,
        text: "1000 2000 4000 4000 2000 1000",
      },
      {
        id: 3,
        text: "1000 2000 4000 2000 1000",
      },
      {
        id: 4,
        text: "1000 2000 2000 1000",
      },
    ],
    answerId: 2,
  },
  {
    id: 22,
    categoryId: 6,
    text: (
      <>
        <p>What is the output of the following Java program?</p>
        <CodeBlock
          text={`class Base {
  public void Print() {
      System.out.println("Base");
  }         
}

class Derived extends Base {    
    public void Print() {
        System.out.println("Derived");
    }
}
  
class Main{
    public static void DoPrint( Base o ) {
        o.Print();   
    }
    public static void main(String[] args) {
        Base x = new Base();
        Base y = new Derived();
        Derived z = new Derived();
        DoPrint(x);
        DoPrint(y);
        DoPrint(z);
    }
}`}
          language="java"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: (
          <>
            <p>Base</p>
            <p>Derived</p>
            <p>Derived</p>
          </>
        ),
      },
      {
        id: 2,
        text: (
          <>
            <p>Base</p>
            <p>Base</p>
            <p>Derived</p>
          </>
        ),
      },
      {
        id: 3,
        text: (
          <>
            <p>Base</p>
            <p>Derived</p>
            <p>Base</p>
          </>
        ),
      },
      {
        id: 4,
        text: "Compiler Error",
      },
    ],
    answerId: 1,
  },
  {
    id: 23,
    categoryId: 4,
    text: (
      <>
        <p>What will be the output of the following Java code?</p>
        <CodeBlock
          text={`class increment {
  public static void main(String args[]) 
  {        
        int g = 3;
        System.out.print(++g * 8);
  } 
}`}
          language="java"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "32",
      },
      {
        id: 2,
        text: "33",
      },
      {
        id: 3,
        text: "24",
      },
      {
        id: 4,
        text: "25",
      },
    ],
    answerId: 1,
  },
  {
    id: 24,
    categoryId: 4,
    text: (
      <>
        <p>What will be the output of the following JavaScript code snippet?</p>
        <CodeBlock
          text={`function equalto()
{
    const num=10;
    if(num==="10")
        return true;
    else
        return false;
}`}
          language="javascript"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "false",
      },
      {
        id: 2,
        text: "true",
      },
      {
        id: 3,
        text: "compilation error",
      },
      {
        id: 4,
        text: "runtime error",
      },
    ],
    answerId: 1,
  },
  {
    id: 25,
    categoryId: 4,
    text: (
      <>
        <p>Which of the C# code should be added to get the following output?</p>
        <CodeBlock
          text={`* * * * *
* * * *
* * *
* *
*
static void Main(string[] args)
{
  int i,j;
  /* Add code here */
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: (
          <CodeBlock
            text={`for (i = 0;i <= 4; i++)
{
  for(j = 0;j <= 4; j++)
  Console.Write("*");
  Console.Write("\\n");
}`}
            language="c"
            showLineNumbers={true}
            startingLineNumber={1}
            theme={dracula}
          />
        ),
      },
      {
        id: 2,
        text: (
          <>
            <CodeBlock
              text={`for (i = 0;i <= 4; i++)
{
  for(j = 4;j <= i; j--)
  Console.Write("*");
  Console.Write("\\n");
}`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 3,
        text: (
          <>
            <CodeBlock
              text={`for (i = 0;i <= 4; i++)
{
  for (j = i;j <= 4; j++)
  Console.Write("*");
  Console.Write("\\n");
}`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 4,
        text: (
          <>
            <CodeBlock
              text={`for ( i = 0;i <= 4; i++)
{
  for (j = 0;j <= i; j++)
  Console.Write("*");
  Console.Write("\\n");
}`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
    ],
    answerId: 3,
  },
  {
    id: 26,
    categoryId: 4,
    text: (
      <>
        <p>
          For the incomplete C# program below, which of the code fragments will
          <b>not</b> result in an infinite loop?
        </p>
        <CodeBlock
          text={`static void Main(string[] args)
{
  int i = 1234 ,j = 0;
  /*ADD CODE HERE */
  Console.WriteLine(j);
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: (
          <>
            <CodeBlock
              text={`do
{
  j = j + (i % 10);
}while ((i = i / 10)!= 0);`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 2,
        text: (
          <>
            <CodeBlock
              text={`do
{
  j = j + (i % 10);
}while ((i / 10)!= 0);`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 3,
        text: (
          <>
            <CodeBlock
              text={`do
{
  j = j + (i % 10);
}while ((i % 10)!= 0);`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 4,
        text: (
          <CodeBlock
            text={`do
{
  j = j + (i % 10);
}while ((i/10 == 0)!= 0);`}
            language="c"
            showLineNumbers={true}
            startingLineNumber={1}
            theme={dracula}
          />
        ),
      },
    ],
    answerId: 1,
  },
  {
    id: 27,
    categoryId: 4,
    text: (
      <>
        <p>What will be the output of the following code?</p>
        <CodeBlock
          text={`#include<stdio.h>
void change(int,int*)
int main()
{
  int a=10, b=20;
  change(a, &b);
  printf("%d %d", a, b);
  return 0;
}
void change(int x, int *y)
{
  x=12;
  *y=15
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "10 20",
      },
      {
        id: 2,
        text: "10 15",
      },
      {
        id: 3,
        text: "12 20",
      },
      {
        id: 4,
        text: "12 15",
      },
    ],
    answerId: 2,
  },
  {
    id: 28,
    categoryId: 4,
    text: (
      <>
        <p>What will happen if we try to compile and run this?</p>
        <CodeBlock
          text={`class Base
{  
  public static void main(String[] args){  
      System.out.println("Hello");  
  }  
}  
public class Test extends Base{}`}
          language="java"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "It will fail to compile",
      },
      {
        id: 2,
        text: "Runtime error",
      },
      {
        id: 3,
        text: "Compiles and runs with no output",
      },
      {
        id: 4,
        text: "Compiles and runs printing Hello",
      },
    ],
    answerId: 4,
  },
  // DATABASES
  {
    id: 29,
    categoryId: 3,
    text: "Which of the following is not a commonly used relational database management system?",
    answers: [
      {
        id: 1,
        text: "MongoDB",
      },
      {
        id: 2,
        text: "Oracle",
      },
      {
        id: 3,
        text: "MySQL",
      },
      {
        id: 4,
        text: "PostgreSQL",
      },
    ],
    answerId: 1,
  },
  {
    id: 30,
    categoryId: 3,
    text: "NoSQL databases is used mainly for handling large volumes of ______________ data.",
    answers: [
      {
        id: 1,
        text: "unstructured",
      },
      {
        id: 2,
        text: "structured",
      },
      {
        id: 3,
        text: "semi-structured",
      },
      {
        id: 4,
        text: "all of the mentioned",
      },
    ],
    answerId: 1,
  },
  {
    id: 31,
    categoryId: 3,
    text: " ____________ data model with embedded data combines all related data for a represented entity in a single document.",
    answers: [
      {
        id: 1,
        text: "normalized",
      },
      {
        id: 2,
        text: "denormalized",
      },
      {
        id: 3,
        text: "non relational",
      },
      {
        id: 4,
        text: "relational",
      },
    ],
    answerId: 2,
  },
  {
    id: 32,
    categoryId: 3,
    text: "Which of the following commands is used to delete all rows and free up space from a table?",
    answers: [
      {
        id: 1,
        text: "DELETE",
      },
      {
        id: 2,
        text: "DROP",
      },
      {
        id: 3,
        text: "ALTER",
      },
      {
        id: 4,
        text: "TRUNCATE",
      },
    ],
    answerId: 4,
  },
  {
    id: 33,
    categoryId: 3,
    text: "Which of the following is not Constraint in SQL?",
    answers: [
      {
        id: 1,
        text: "Primary Key",
      },
      {
        id: 2,
        text: "Not Null",
      },
      {
        id: 3,
        text: "Check",
      },
      {
        id: 4,
        text: "Union",
      },
    ],
    answerId: 4,
  },
  {
    id: 34,
    categoryId: 3,
    text: "Which of the following is not a valid aggregate function?",
    answers: [
      {
        id: 1,
        text: "COUNT",
      },
      {
        id: 2,
        text: "COMPUTE",
      },
      {
        id: 3,
        text: "SUM",
      },
      {
        id: 4,
        text: "MAX",
      },
    ],
    answerId: 2,
  },
  {
    id: 35,
    categoryId: 3,
    text: "In SQL, what is the purpose of the HAVING clause?",
    answers: [
      {
        id: 1,
        text: "Filters records based on a condition",
      },
      {
        id: 2,
        text: "Specifies a condition for sorting the result set",
      },
      {
        id: 3,
        text: "Filters results of aggregate functions applied to groups",
      },
      {
        id: 4,
        text: "Joins two or more tables",
      },
    ],
    answerId: 3,
  },
  {
    id: 36,
    categoryId: 3,
    text: "What is the purpose of a foreign key in a relational database?",
    answers: [
      {
        id: 1,
        text: "It uniquely identifies each record in a table",
      },
      {
        id: 2,
        text: "It ensures that the values in a column are unique",
      },
      {
        id: 3,
        text: "It establishes a link between two tables",
      },
      {
        id: 4,
        text: "It enforces data integrity rules",
      },
    ],
    answerId: 3,
  },
  {
    id: 37,
    categoryId: 3,
    text: "What is the difference between a primary key and a unique key?",
    answers: [
      {
        id: 1,
        text: "There is no difference; the terms are used interchangeably",
      },
      {
        id: 2,
        text: "A table can have multiple primary keys, but only one unique key",
      },
      {
        id: 3,
        text: "A unique key allows NULL values, while a primary key does not",
      },
      {
        id: 4,
        text: "A table can have only one primary key, but multiple unique keys",
      },
    ],
    answerId: 4,
  },
  {
    id: 38,
    categoryId: 3,
    text: "Which of the following is NOT a reason NoSQL has become a popular solution for some organizations?",
    answers: [
      {
        id: 1,
        text: "Better scalability",
      },
      {
        id: 2,
        text: "Improved ability to keep data consistent",
      },
      {
        id: 3,
        text: "Faster access to data than relational database management systems (RDBMS)",
      },
      {
        id: 4,
        text: "More easily allows for data to be held across multiple servers",
      },
    ],
    answerId: 2,
  },
  {
    id: 39,
    categoryId: 3,
    text: "When is it best to use a NoSQL database?",
    answers: [
      {
        id: 1,
        text: "When providing confidentiality, integrity, and availability is crucial",
      },
      {
        id: 2,
        text: "When the data is predictable",
      },
      {
        id: 3,
        text: "When the retrieval of large quantities of data is needed",
      },
      {
        id: 4,
        text: "When the retrieval speed of data is not critical",
      },
    ],
    answerId: 3,
  },
  // CLOUD COMPUTING
  {
    id: 40,
    categoryId: 6,
    text: "What is Infrastructure as a Service (IaaS)?",
    answers: [
      {
        id: 1,
        text: "A cloud computing service that provides virtualized computing resources, such as servers and storage",
      },
      {
        id: 2,
        text: "A cloud computing service that provides access to a software application over the internet",
      },
      {
        id: 3,
        text: "A cloud computing service that provides a development platform for building software applications",
      },
      {
        id: 4,
        text: "A cloud computing service that provides data analysis and visualization tools",
      },
    ],
    answerId: 1,
  },
  {
    id: 41,
    categoryId: 6,
    text: "What is the benefit of using cloud computing?",
    answers: [
      {
        id: 1,
        text: "Cost savings and scalability",
      },
      {
        id: 2,
        text: "Increased security and data privacy",
      },
      {
        id: 3,
        text: "Better performance and faster processing",
      },
      {
        id: 4,
        text: "More control over hardware and software resources",
      },
    ],
    answerId: 1,
  },
  {
    id: 42,
    categoryId: 6,
    text: "Which of the following is not a type of cloud server?",
    answers: [
      {
        id: 1,
        text: "Public Cloud Servers",
      },
      {
        id: 2,
        text: "Private Cloud Servers",
      },
      {
        id: 3,
        text: "Dedicated Cloud Servers",
      },
      {
        id: 4,
        text: "Merged Cloud Servers",
      },
    ],
    answerId: 4,
  },
  // Category 3: BRAIN TEASERS
  {
    id: 43,
    categoryId: 2,
    text: "Let x be an integer which can take a value of 0 or 1. The statement if(x == 0) x = 1; else x = 0; is equivalent to which one of the following?",
    answers: [
      {
        id: 1,
        text: "x = 1 + x;",
      },
      {
        id: 2,
        text: "x = 1 - x;",
      },
      {
        id: 3,
        text: "x = x - 1;",
      },
      {
        id: 4,
        text: "x = 1 % x;",
      },
    ],
    answerId: 2,
  },
  {
    id: 44,
    categoryId: 2,
    text: (
      <>
        <p>Consider the following logical inferences.</p>
        <p>I1: If it rains then the cricket match will not be played.</p>
        <p>The cricket match was played.</p>
        <p>
          <b>Inference:</b> There was no rain.
        </p>
        <p>I2: If it rains then the cricket match will not be played.</p>
        <p>It did not rain.</p>
        <p>
          <b>Inference:</b> The cricket match was played.
        </p>
        <p>
          Which of the following is <b>TRUE</b>?
        </p>
      </>
    ),
    answers: [
      {
        id: 1,
        text: "Both I1 and I2 are correct inferences.",
      },
      {
        id: 2,
        text: "I1 is correct but I2 is not a correct inference.",
      },
      {
        id: 3,
        text: "I1 is not correct but I2 is a correct inference.",
      },
      {
        id: 4,
        text: "Both I1 and I2 are not correct inferences.",
      },
    ],
    answerId: 2,
  },
  {
    id: 45,
    categoryId: 2,
    text: (
      <>
        <p>IF</p>
        <p>4 + 4 = 6</p>
        <p>25 + 25 = 45</p>
        <p>16 + 16 = 28</p>
        <p>9 + 9 = 15</p>
        <p>THEN</p>
        <p>1 + 1 = ?</p>
      </>
    ),
    answers: [
      {
        id: 1,
        text: "0",
      },
      {
        id: 2,
        text: "1",
      },
      {
        id: 3,
        text: "2",
      },
      {
        id: 4,
        text: "3",
      },
    ],
    answerId: 2,
  },
  {
    id: 46,
    categoryId: 2,
    text: "Your friend said, 'If yesterday was tomorrow, today would be Friday.' On which day did your friend make this statement?",
    answers: [
      {
        id: 1,
        text: "SUNDAY",
      },
      {
        id: 2,
        text: "WEDNESDAY",
      },
      {
        id: 3,
        text: "FRIDAY",
      },
      {
        id: 4,
        text: "THURSDAY",
      },
    ],
    answerId: 3,
  },
  {
    id: 47,
    categoryId: 2,
    text: "A car has 4 tyres and 1 spare tyre. Each tyre can travel a maximum distance of 20000 miles before wearing off. What is the maximum distance the car can travel before you are forced to buy a new tyre? You are allowed to change tyres (using the spare tyre) an unlimited number of times. ",
    answers: [
      {
        id: 1,
        text: "20000",
      },
      {
        id: 2,
        text: "25000",
      },
      {
        id: 3,
        text: "15000",
      },
      {
        id: 4,
        text: "40000",
      },
    ],
    answerId: 2,
  },
  // ALGORITHMS
  {
    id: 48,
    categoryId: 4,
    text: (
      <>
        <p>
          Choose the best statement with respect to following three program
          snippets.
        </p>
        <CodeBlock
          text={`/*Program Snippet 1 with for loop*/
for (i = 0; i < 10; i++)
{
  /*statement1*/
  continue;
  /*statement2*/
}

/*Program Snippet 2 with while loop*/
i = 0;
while (i < 10)
{
  /*statement1*/
  continue;
  /*statement2*/
  i++;
}

/*Program Snippet 3 with do-while loop*/
i = 0;
do
{
  /*statement1*/
  continue;
  /*statement2*/
  i++;
} while (i < 10);`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "All the loops are equivalent i.e. any of the three can be chosen and thay all will perform exactly the same.",
      },
      {
        id: 2,
        text: "Continue can't be used with all three loops in C.",
      },
      {
        id: 3,
        text: "After hitting the continue; statement in all the loops, the next expression to be executed would be the controlling expression (i.e. i < 10) in all the 3 loops.",
      },
      {
        id: 4,
        text: "None of the options is correct.",
      },
    ],
    answerId: 4,
  },

  {
    id: 49,
    categoryId: 4,
    text: (
      <>
        <p>What does the following piece of code do?</p>
        <CodeBlock
          text={`for (int i = 0; i < arr.length-1; i++)
{
    for (int j = i+1; j < arr.length; j++)
    {
        if( (arr[i].equals(arr[j])) && (i != j) )
        {
            System.out.println(arr[i]);
        }
    }
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "Print the duplicate elements in the array",
      },
      {
        id: 2,
        text: "Print the element with maximum frequency",
      },
      {
        id: 3,
        text: "Print the unique elements in the array",
      },
      {
        id: 4,
        text: "Prints the element with minimum frequnecy",
      },
    ],
    answerId: 1,
  },
  {
    id: 50,
    categoryId: 4,
    text: "Choose the recursive formula for the Fibonacci series.(n>=1)",
    answers: [
      {
        id: 1,
        text: "F(n) = F(n+1) + F(n+2)",
      },
      {
        id: 2,
        text: "F(n) = F(n) + F(n+1)",
      },
      {
        id: 3,
        text: "F(n) = F(n-1) + F(n-2)",
      },
      {
        id: 4,
        text: "F(n) = F(n-1) – F(n-2)",
      },
    ],
    answerId: 3,
  },
  {
    id: 51,
    categoryId: 4,
    text: (
      <>
        <p>
          Which of the following pieces of code corrects the following program,
          resulting in printing the minus sign 20 times?
        </p>
        <CodeBlock
          text={`#include <stdio.h>
int main(){
  int i;
  int n = 20;
  for( i = 0; i < n; i-- )
      printf("-");
  return 0;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: (
          <>
            <CodeBlock
              text={`for( i = 0; -i < n; i-- )
printf("-");`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 2,
        text: (
          <>
            <CodeBlock
              text={`for( i = 0; i + n; i-- )
printf("-");`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 3,
        text: (
          <>
            <CodeBlock
              text={`for( i = 0; i < n; n-- )
printf("-");`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 4,
        text: "All of them",
      },
    ],
    answerId: 4,
  },
  // _VOIS TRIVIA
  {
    id: 52,
    categoryId: 1,
    text: "What does VOIS stand for?",
    answers: [
      {
        id: 1,
        text: "Vodafone Innovative Solutions",
      },
      {
        id: 2,
        text: "Vodafone Intelligent Solutions",
      },
      {
        id: 3,
        text: "Vodafone Intelligent Services",
      },
      {
        id: 4,
        text: "Vodafone IT Services",
      },
    ],
    answerId: 2,
  },
  {
    id: 53,
    categoryId: 1,
    text: (
      <p>
        Which country does <b>not</b> have a VOIS center?
      </p>
    ),
    answers: [
      {
        id: 1,
        text: "India",
      },
      {
        id: 2,
        text: "Egypt",
      },
      {
        id: 3,
        text: "Romania",
      },
      {
        id: 4,
        text: "Germany",
      },
    ],
    answerId: 4,
  },
  {
    id: 54,
    categoryId: 1,
    text: "How many VOIS employees are there worldwide?",
    answers: [
      {
        id: 1,
        text: "31000",
      },
      {
        id: 2,
        text: "15000",
      },
      {
        id: 3,
        text: "20000",
      },
      {
        id: 4,
        text: "25000",
      },
    ],
    answerId: 1,
  },
  {
    id: 55,
    categoryId: 1,
    text: "We have a number of ____ locations worldwide:",
    answers: [
      {
        id: 1,
        text: "10",
      },
      {
        id: 2,
        text: "5",
      },
      {
        id: 3,
        text: "8",
      },
      {
        id: 4,
        text: "3",
      },
    ],
    answerId: 3,
  },
  {
    id: 56,
    categoryId: 1,
    text: "We have a Technology portfolio which includes:",
    answers: [
      {
        id: 1,
        text: "Software Development",
      },
      {
        id: 2,
        text: "Cyber Security",
      },
      {
        id: 3,
        text: "Clound and Infrastructure Services",
      },
      {
        id: 4,
        text: "All of the options",
      },
    ],
    answerId: 4,
  },
];
