  // Accepts yearsOfExperience as number or string (e.g., 1.5 for 1 year 6 months)
  export function formatExperience(exp: number | string) {
    const num = typeof exp === 'string' ? parseFloat(exp) : exp;
    if (isNaN(num)) return '';
    const years = Math.floor(num);
    const months = Math.round((num - years) * 12);
    let result = '';
    if (years > 0) result += `${years}y`;
    if (months > 0) result += (years > 0 ? ' ' : '') + `${months}m`;
    if (!result) result = '0m';
    return result + ' exp';
  }