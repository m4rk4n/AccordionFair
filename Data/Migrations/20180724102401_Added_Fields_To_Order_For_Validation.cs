using Microsoft.EntityFrameworkCore.Migrations;

namespace AccordionFair.Migrations
{
    public partial class Added_Fields_To_Order_For_Validation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "OrderPaymentValid",
                table: "Orders",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "OrderTransactionsConfirmed",
                table: "Orders",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "ReceivedValue",
                table: "Orders",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OrderPaymentValid",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderTransactionsConfirmed",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "ReceivedValue",
                table: "Orders");
        }
    }
}
