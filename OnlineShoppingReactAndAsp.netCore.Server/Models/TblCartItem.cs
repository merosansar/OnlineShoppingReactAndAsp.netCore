using System;
using System.Collections.Generic;

namespace OnlineShoppingReactAndAsp.netCore.Server.Models;

public partial class TblCartItem
{
    public int Id { get; set; }

    public int CartId { get; set; }

    public int ProductId { get; set; }

    public int Quantity { get; set; }

    public decimal Price { get; set; }

    public DateTime? AddedDate { get; set; }

    public bool IsSelected { get; set; }

    public virtual TblCart Cart { get; set; } = null!;

    public virtual TblProduct Product { get; set; } = null!;
}
