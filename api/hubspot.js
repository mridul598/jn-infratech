export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { name, email, phone, message } = req.body

  try {
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
      },
      body: JSON.stringify({
        properties: {
          firstname: name,
          email: email,
          phone: phone,
          message: message,
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return res.status(400).json(data)
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: "Server error" })
  }
}