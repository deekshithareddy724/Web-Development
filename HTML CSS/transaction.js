function processTransactions(transactions) {
  let balance = 0;
  let totalDeposits = 0;
  let totalWithdrawals = 0;

  for (const transaction of transactions) {
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
      totalDeposits += transaction.amount;
    } else if (transaction.type === 'withdrawal') {
      balance -= transaction.amount;
      totalWithdrawals += transaction.amount;
    }
  }

  return {
    finalBalance: balance,
    totalDeposits: totalDeposits,
    totalWithdrawals: totalWithdrawals
  };
}
