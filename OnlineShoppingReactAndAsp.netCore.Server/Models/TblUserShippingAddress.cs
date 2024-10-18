using System;
using System.Collections.Generic;

namespace OnlineShoppingReactAndAsp.netCore.Server.Models;

public partial class TblUserShippingAddress
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string EmailAddress { get; set; } = null!;

    public string PhoneNo { get; set; } = null!;

    public string ShippingAddress { get; set; } = null!;

    public virtual TblUser User { get; set; } = null!;
}
