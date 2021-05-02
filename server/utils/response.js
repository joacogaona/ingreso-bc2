export function successResponse(res, data = null, status = 200) {
  return res.status(status).json({ success: true, data })
}
