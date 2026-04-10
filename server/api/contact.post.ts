const TIMING_MAP: Record<string, { label: string; color: string; priority: string }> = {
  'immediat': { label: 'Immédiat (haute priorité)', color: '#EF4444', priority: 'HAUTE PRIORITÉ' },
  '3-6mois': { label: 'Dans 3 à 6 mois', color: '#F59E0B', priority: 'PRIORITÉ MOYENNE' },
  '+1an': { label: 'Dans plus d\'un an', color: '#6B7280', priority: 'NURTURE' }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.name?.trim() || !body?.email?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Champs requis manquants.' })
  }

  if (!body?.phone?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Téléphone obligatoire.' })
  }

  if (!body?.timing) {
    throw createError({ statusCode: 400, statusMessage: 'Timing obligatoire.' })
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(body.email?.trim() || '')) {
    throw createError({ statusCode: 400, statusMessage: 'Adresse email invalide.' })
  }

  const timingInfo = TIMING_MAP[body.timing] || { label: body.timing, color: '#6B7280', priority: '' }

  const htmlBody = `
    <h2 style="color:#008B45;">Nouveau lead NEXOMA</h2>
    <div style="display:inline-block;padding:8px 16px;border-radius:6px;background:${timingInfo.color};color:#fff;font-weight:bold;font-family:Arial,sans-serif;font-size:13px;margin-bottom:16px;">
      ${timingInfo.priority} — ${timingInfo.label}
    </div>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Timing</td><td style="padding:8px;border-bottom:1px solid #eee;color:${timingInfo.color};font-weight:bold;">${timingInfo.label}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Nom</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.name}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Téléphone</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${body.phone}">${body.phone}</a></td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Entreprise</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.company || '-'}</td></tr>
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
