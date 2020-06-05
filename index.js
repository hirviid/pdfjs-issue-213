const pdf = require("pdfjs");
const path = require("path");
const fs = require("fs");
const teams = require("./src/data");

const FONT_SIZE = {
  LARGE: 14,
  SMALL: 8,
  X_SMALL: 6,
};
const COLORS = {
  WHITE: 0xffffff,
  GREY_LIGHT: 0xf5f6fa,
  PRIMARY_LIGHT: 0xeceefe,
};

const newA4Doc = () => {
  return new pdf.Document({
    font: require("pdfjs/font/Helvetica"),
    width: 21 * pdf.cm,
    height: 29.7 * pdf.cm,
    padding: 2 * pdf.cm,
  });
};

const endPdf = async (doc) => {
  const fileName = "example.pdf";
  const filePath = path.join(__dirname, fileName);

  doc.pipe(fs.createWriteStream(filePath));
  await doc.end();
};

const exportPdf = async () => {
  console.log("Create A4 Doc");
  const doc = newA4Doc();

  console.log("Add page header");
  doc
    .header()
    .table({ widths: [null], paddingBottom: pdf.cm })
    .row()
    .cell()
    .text(`Planning 11-04-2020`);

  console.log("Add page footer");
  doc.footer().pageNumber(
    function (curr, total) {
      return curr + " / " + total;
    },
    { textAlign: "center", fontSize: FONT_SIZE.X_SMALL }
  );

  console.log("Render tables");
  for (const team of teams) {
    doc.text({ color: COLORS.WHITE }).add("---"); // hidden whitespace

    // const arrivalTimes = await getArrivalTimes(team, prisma);
    const tableWrapper = doc.cell({
      paddingBottom: 1.5 * pdf.cm,
      fontSize: FONT_SIZE.SMALL,
    });

    const table = tableWrapper.table({
      widths: [
        2 * pdf.cm,
        4 * pdf.cm,
        3 * pdf.cm,
        2 * pdf.cm,
        2 * pdf.cm,
        4 * pdf.cm,
      ],
      borderHorizontalWidths: function (i) {
        return i < 2 ? 0.5 : 0.1;
      },
      padding: 5,
    });

    // HERE'S THE ISSUE ↓ (It's OK when replacing one of the "table.header"s with "table.row")
    const trTeam = table.header({ backgroundColor: COLORS.PRIMARY_LIGHT });
    trTeam.cell(team.name);
    trTeam.cell(team.members.map((m) => m.lastName).join(", "), { colspan: 3 });
    trTeam.cell(team.vehicle.name, { colspan: 2 });

    // HERE'S THE ISSUE ↓
    const trHeader = table.header({
      font: require("pdfjs/font/Helvetica-Bold"),
      backgroundColor: COLORS.GREY_LIGHT,
    });
    trHeader.cell("Hr");
    trHeader.cell("Location");
    trHeader.cell("Timespan");
    trHeader.cell("Unit", { textAlign: "center" });
    trHeader.cell("TTP (min)", { textAlign: "center" });
    trHeader.cell("Product");

    const trDeparture = table.row();
    trDeparture.cell(team.startHour);
    trDeparture.cell("Departure");

    team.reservations.forEach((reservation, index) => {
      const trReservation = table.row();
      trReservation.cell("TODO");
      trReservation.cell(reservation.city || "");
      trReservation.cell(reservation.timespan);
      trReservation.cell(
        reservation.products
          .reduce((t, product) => t + product.units, 0)
          .toString(),
        { textAlign: "center" }
      );
      trReservation.cell(reservation.duration.toString(), {
        textAlign: "center",
      });
      trReservation.cell(
        reservation.products.map((product) => product.description).join(", ")
      );
    });

    const trArrival = table.row();
    trArrival.cell("TODO");
    trArrival.cell("Home");
  }

  console.log("Write PDF");
  await endPdf(doc);
};

exportPdf();
