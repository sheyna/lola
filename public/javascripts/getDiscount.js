var getDiscount = function(originalPrice, discountPercent) {
  var discount = (discountPercent * 0.01) * originalPrice;
  return (originalPrice - discount).toFixed(2);
}

// module.exports.getDiscount = getDiscount;