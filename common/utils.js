/* 
 * Given a rate, return the corresponding amount of cents
 * 0 -> ALL
 * 1 -> 6hr
 * 2 -> 3hr
 * 3 -> 1hr
 */
export const get_owed = ticket => {
  try {
    if (ticket.paid) { return 0 }
    const value = parseInt(ticket.rate)
    switch (value) {
      case 0:
        return 1015       
      case 1:
        return 675
      case 2:
        return 450
      case 3:
        return 300
      default:
        throw Exception("No rate provided")
    }
  } catch (e) {
    console.log(e)
    return null
  }
}

export const spots_available = () => {
  return 24
}

export const validate_cc = (cc) => {
  return cc != undefined
}
