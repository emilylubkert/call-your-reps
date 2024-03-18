import Image from 'next/image'

export default function Home() {

  const getReps = async () => {
    const display = document.getElementById('display');
    try {
      const result = await fetch('https://www.googleapis.com/civicinfo/v2/representatives');

      if (display) display.textContent = await result.json();

    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
  return (
    <main>
      <div>
        <h1>Call Your Reps</h1>
        <p id='display'></p>
        <button onClick={getReps}>Click Me</button>
      </div>
    </main>
  )
}
