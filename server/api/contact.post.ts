export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.name?.trim() || !body?.email?.trim() || !body?.company?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Champs requis manquants.' })
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(body.email?.trim() || '')) {
    throw createError({ statusCode: 400, statusMessage: 'Adresse email invalide.' })
  }

  const htmlBody = `
    <h2 style="color:#008B45;">Nouveau lead NEXOMA</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Nom</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.name}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Entreprise</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.company}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Secteur</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.sector || '-'}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Tâche à automatiser</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.task || '-'}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.message || '-'}</td></tr>
    </table>
    <p style="margin-top:20px;color:#666;font-size:12px;">Envoyé depuis nexoma.poitiers.digital</p>
  `

  const { default: nodemailer } = await import('nodemailer')

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })

  await transporter.sendMail({
    from: `"NEXOMA" <${process.env.GMAIL_USER}>`,
    to: 'contact@poitiers.digital',
    cc: ['matthieu@shark-graphik.fr', 'nicolads2004@gmail.com'],
    subject: `[NEXOMA] Nouveau lead — ${body.company} (${body.name})`,
    html: htmlBody
  })

  return { success: true }
})
