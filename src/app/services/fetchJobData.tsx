export async function getJobsData() {
    const res = await fetch(`https://my-resume-backend.vercel.app/jobs`)
    const data = await res.json()
    return data
  }